"use client";

import { AutoField, FieldLabel, Puck, Render } from "@/core";
import headingAnalyzer from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../config";
import { useDemoData } from "../../lib/use-demo-data";
import { useEffect, useState, useCallback, useRef } from "react";
import { Type } from "lucide-react";
import type { UserData } from "../../config/types";
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
  const latestDataRef = useRef<Partial<UserData> | undefined>(undefined);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    latestDataRef.current = data;
  }, [data]);

  // Remove custom onChange logic and let Puck manage its own state
  const handleChange = undefined;

  const handlePublish = useCallback(async () => {
    const latestData = latestDataRef.current;
    if (!latestData) return;

    const apiPath = path === "/" ? "/api/pages" : `/api/pages${path}`;
    // Always send the freshest data from the editor, no normalization or remapping
    await fetch(apiPath, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: latestData }),
    });

    setData(latestData);
  }, [path, setData]);

  if (!isClient) return null;

  const params =
    typeof window !== "undefined"
      ? new URL(window.location.href).searchParams
      : new URLSearchParams();

  if (isEdit) {
    if (
      data &&
      (data.content ||
        (data.zones && Array.isArray(data.zones["default-zone"])))
    ) {
      return (
        <div>
          <Title1 as="h1" tabIndex={0} style={{ marginBottom: "16px" }}>
            Edit Mode
          </Title1>
          <Puck
            config={config}
            data={data}
            onPublish={async (data) => {
              const apiPath = path === "/" ? "/api/pages" : `/api/pages${path}`;
              await fetch(apiPath, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data }),
              });
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
                      aria-label={field.label || name}
                    />
                  </FieldLabel>
                ),
              },
              headerActions: ({ children }) => (
                <nav aria-label="Editor actions" style={{ display: "flex", gap: 8 }}>
                  <Button
                    as="a"
                    href={path}
                    target="_blank"
                    appearance="secondary"
                    style={{
                      color: "var(--colorBrandForeground1)",
                      background: "var(--colorNeutralBackground1)",
                    }}
                  >
                    View page
                  </Button>
                  {children}
                </nav>
              ),
              // Example overlay override for accessibility
              componentOverlay: ({ hover, isSelected }) => (
                <div
                  aria-hidden={!hover && !isSelected}
                  role="presentation"
                  tabIndex={-1}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: hover
                      ? "var(--colorBrandBackground2)"
                      : "transparent",
                    outline: isSelected
                      ? "2px solid var(--colorBrandStroke1)"
                      : "",
                    opacity: hover || isSelected ? 0.3 : 0,
                    transition: "background 0.2s, outline 0.2s, opacity 0.2s",
                  }}
                />
              ),
              // Example action bar override for ARIA/keyboard
              actionBar: ({ children, label, parentAction }) => (
                <div
                  role="toolbar"
                  aria-label={label || "Component actions"}
                  tabIndex={0}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "var(--colorNeutralBackground2)",
                    borderTop: "1px solid var(--colorNeutralStroke2)",
                    padding: "8px 12px",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      // Custom keyboard navigation if needed
                    }
                  }}
                >
                  {parentAction}
                  {label && (
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--colorBrandForeground1)",
                        marginRight: 8,
                      }}
                    >
                      {label}
                    </span>
                  )}
                  {children}
                </div>
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
        background: "var(--colorNeutralBackground1)",
        outline: "none",
      }}
    >
      <div>
        <Title1 as="h1" tabIndex={0} style={{ color: "var(--colorPaletteRedForeground1)" }}>
          404
        </Title1>
        <p style={{ color: "var(--colorNeutralForeground3)" }}>Page not found</p>
      </div>
    </div>
  );
}

export default Client;
