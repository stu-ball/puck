"use client";

import { AutoField, FieldLabel, Puck, Render } from "@/core";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../config";
import { useDemoData } from "../../lib/use-demo-data";
import { useEffect, useState } from "react";
import { Type } from "lucide-react";
import {
  Button,
  Title1,
  List,
  ListItem,
} from "@fluentui/react-components";

export function Client({ path, isEdit }: { path: string; isEdit: boolean }) {
  const metadata = {
    example: "Hello, world",
  };

  const { data, resolvedData, key, setData } = useDemoData({
    path,
    isEdit,
    metadata,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const params = new URL(window.location.href).searchParams;

  if (isEdit) {
    if (
      data &&
      (data.content ||
        (data.zones && Array.isArray(data.zones["default-zone"])))
    ) {
      return (
        <div>
          <Title1 as="h1">Edit Mode</Title1>
          <Puck
            config={config}
            data={data}
            onPublish={async (data) => {
              // Normalize: homepage PUT should be /api/pages, not /api/pages/
              const apiPath = path === "/" ? "/api/pages" : `/api/pages${path}`;
              // Ensure both content and zones["default-zone"] are kept in sync
              let normalizedData = { ...data };
              if (
                data &&
                data.zones &&
                Array.isArray(data.zones["default-zone"])
              ) {
                normalizedData.content = data.zones["default-zone"];
              } else if (data && Array.isArray(data.content)) {
                normalizedData.zones = {
                  ...data.zones,
                  "default-zone": data.content,
                };
              }
              await fetch(apiPath, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: normalizedData }),
              });
              setData(normalizedData);
              // Force reload data from backend to ensure sync
              window.location.reload();
            }}
            plugins={[headingAnalyzer]}
            headerPath={path}
            iframe={{
              enabled: params.get("disableIframe") === "true" ? false : true,
            }}
            fieldTransforms={{
              userField: ({ value }) => value, // Included to check types
            }}
            overrides={{
              fieldTypes: {
                // Example of user field provided via overrides
                userField: ({ readOnly, field, name, value, onChange }) => (
                  <FieldLabel
                    label={field.label || name}
                    readOnly={readOnly}
                    icon={<Type size={16} />}
                  >
                    <AutoField
                      field={{ type: "text" }}
                      onChange={onChange}
                      value={value}
                    />
                  </FieldLabel>
                ),
              },
              headerActions: ({ children }) => (
                <>
                  <div>
                    <Button as="a" href={path} target="_blank" appearance="secondary">
                      View page
                    </Button>
                  </div>

                  {children}
                </>
              ),
            }}
            metadata={metadata}
          />
        </div>
      );
    }
    // Loading or missing content
    return null;
  }

  if (data.content) {
    return <Render config={config} data={resolvedData} metadata={metadata} />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default Client;
