import { useEffect, useState } from "react";
import config, { componentKey } from "../config";

import { Metadata, resolveAllData } from "@/core";
import { Components, UserData } from "../config/types";
import { RootProps } from "../config/root";

const isBrowser = typeof window !== "undefined";

export const useDemoData = ({
  path,
  isEdit,
  metadata = {},
}: {
  path: string;
  isEdit: boolean;
  metadata?: Metadata;
}) => {
  // unique b64 key that updates each time we add / remove components

  const key = `puck-demo:${componentKey}:${path}`;

  const [data, setData] = useState<Partial<UserData>>({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Debug: log path and apiPath for troubleshooting
        // eslint-disable-next-line no-console
        console.log("useDemoData fetch", { path, isEdit, apiPath: path === "/" ? "/api/pages" : `/api/pages${path}` });
        const apiPath = path === "/" ? "/api/pages" : `/api/pages${path}`;
        const res = await fetch(apiPath);
        if (res.ok) {
          const json = await res.json();
          // Always extract "/" key for homepage, both in view and edit mode
          if (path === "/" && json && typeof json === "object" && "/" in json) {
            setData(json["/"]);
          } else {
            setData(json);
          }
        } else {
          setData({});
        }
      } catch {
        setData({});
      }
    }
    if (isBrowser) {
      fetchData();
    }
  }, [path, isEdit, key]);

  // Normalize blocks for editor compatibility
  const normalizedData = {
    ...data,
    blocks:
      (data && Array.isArray(data["zones"]?.["default-zone"]))
        ? data["zones"]["default-zone"]
        : (Array.isArray(data["content"]) ? data["content"] : [])
  };

  // Normally this would happen on the server, but we can't
  // do that because we're using local storage as a database
  const [resolvedData, setResolvedData] = useState<Partial<UserData>>(data);

  useEffect(() => {
    if (data && !isEdit) {
      resolveAllData<Components, RootProps>(data, config, metadata).then(
        setResolvedData
      );
    }
  }, [data, isEdit, metadata]);

  useEffect(() => {
    if (!isEdit) {
      const title = data?.root?.props?.title || data?.root?.title;
      document.title = title || "";
    }
  }, [data, isEdit]);

  return { data, resolvedData, key, setData };
};
