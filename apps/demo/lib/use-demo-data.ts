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
        const res = await fetch(`/api/pages${path}`);
        if (res.ok) {
          const json = await res.json();
          setData(json);
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
