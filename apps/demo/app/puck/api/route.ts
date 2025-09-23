import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "apps", "demo", ".puck-db.json");

type DB = Record<string, any>;

async function readDb(): Promise<DB> {
  try {
    const str = await fs.readFile(DB_PATH, "utf8");
    return JSON.parse(str || "{}");
  } catch (err) {
    if ((err as any)?.code === "ENOENT") {
      return {};
    }
    throw err;
  }
}

async function writeDb(db: DB) {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf8");
}

function isAuthorized(req: NextRequest) {
  const secret = process.env.PUCK_SECRET;
  if (!secret) return false;

  const header = req.headers.get("x-puck-secret");
  if (header) return header === secret;

  const auth = req.headers.get("authorization") || "";
  if (auth.startsWith("Bearer ")) {
    return auth.slice(7) === secret;
  }

  return false;
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathParam = url.searchParams.get("path") || "/";
    const db = await readDb();
    const data = db[pathParam];
    if (!data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ path: pathParam, data });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isAuthorized(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const { path: pagePath, data } = body;
    if (!pagePath) {
      return NextResponse.json({ error: "Missing path" }, { status: 400 });
    }
    const db = await readDb();
    db[pagePath] = data;
    await writeDb(db);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  return POST(req);
}

export async function DELETE(req: NextRequest) {
  try {
    if (!isAuthorized(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = new URL(req.url);
    const pathParam = url.searchParams.get("path");
    if (!pathParam) {
      return NextResponse.json({ error: "Missing path" }, { status: 400 });
    }
    const db = await readDb();
    if (!db[pathParam]) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    delete db[pathParam];
    await writeDb(db);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}