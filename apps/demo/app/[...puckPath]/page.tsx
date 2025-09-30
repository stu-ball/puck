import resolvePuckPath from "../../lib/resolve-puck-path";
import { Metadata } from "next";
import Client from "./client";
import { headers, cookies } from "next/headers";

/**
 * Support two modes:
 * - Normal pages: /... -> handled by existing client logic
 * - Editor proxy: /puck/... -> server-side gate for editor access
 *
 * For /puck/* we strip the leading "puck" segment and resolve edit state
 * from the remaining segments (so /puck/foo/bar/edit maps to editing /foo/bar).
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ framework: string; uuid: string; puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath } = await params;

  // If this is the /puck/... editor namespace, inspect the remainder
  if (puckPath && puckPath[0] === "puck") {
    const remainder = puckPath.slice(1);
    const { isEdit, path } = resolvePuckPath(remainder);

    if (isEdit) {
      return {
        title: "Editing: " + path,
      };
    }

    return { title: "" };
  }

  // Default behaviour for normal routes
  const { isEdit, path } = resolvePuckPath(puckPath);
  if (isEdit) {
    return {
      title: "Editing: " + path,
    };
  }

  return {
    title: "",
  };
}

async function isAuthorizedServer() {
  const secret = process.env.PUCK_SECRET;
  if (!secret) return false;

  const hdrs = await headers();
  const cook = await cookies();

  const headerAuth = hdrs.get("authorization") || hdrs.get("x-puck-secret");
  if (headerAuth) {
    if (headerAuth.startsWith("Bearer ")) {
      return headerAuth.slice(7) === secret;
    }
    return headerAuth === secret;
  }

  const cookie = cook.get("puck-secret")?.value;
  if (cookie) return cookie === secret;

  return false;
}

export default async function Page({
  params,
}: {
  params: Promise<{ framework: string; uuid: string; puckPath: string[] }>;
}) {
  let { puckPath } = await params;
  if (!puckPath || puckPath.length === 0) {
    puckPath = [""];
  }

  // Editor namespace: /puck/...
  if (puckPath && puckPath[0] === "puck") {
    const remainder = puckPath.slice(1);
    const { isEdit, path } = resolvePuckPath(remainder);

    if (isEdit) {
      const secret = process.env.PUCK_SECRET;
      if (!secret) {
        return (
          <div style={{ padding: 24 }}>
            <h1 className="puck-heading">Editor disabled</h1>
            <p>
              PUCK_SECRET is not set. To enable the editor at /puck/.../edit
              routes, set the PUCK_SECRET environment variable.
            </p>
          </div>
        );
      }

      if (!(await isAuthorizedServer())) {
        return (
          <div style={{ padding: 24 }}>
            <h1 className="puck-heading">Unauthorized</h1>
            <p>
              You are not authorized to access the editor. Provide the correct
              secret via the Authorization header (Bearer {'<secret>'}), the
              x-puck-secret header, or the puck-secret cookie.
            </p>
          </div>
        );
      }
    }

    return <Client isEdit={isEdit} path={path} />;
  }

  // Normal route handling
  const { isEdit, path } = resolvePuckPath(puckPath);
  return <Client isEdit={isEdit} path={path} />;
}
