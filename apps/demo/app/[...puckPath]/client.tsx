"use client";

import { AutoField, Button, FieldLabel, Puck, Render } from "@/core";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../config";
import { useDemoData } from "../../lib/use-demo-data";
import { useEffect, useState } from "react";
import { Type } from "lucide-react";

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
    if (data && data.content) {
      return (
        <div>
          <Puck
            config={config}
            data={data}
            onPublish={async (data) => {
              // Normalize: homepage PUT should be /api/pages, not /api/pages/
              const apiPath = path === "/" ? "/api/pages" : `/api/pages${path}`;
              await fetch(apiPath, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data }),
              });
              setData(data);
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
                    <Button href={path} newTab variant="secondary">
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
