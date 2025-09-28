// Disable rules of hooks as they are regularly used inside render functions
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import {
  ActionBar,
  AutoField,
  Data,
  FieldLabel,
  Puck,
  Render,
  useGetPuck,
} from "@/core";
import { HeadingAnalyzer } from "@/plugin-heading-analyzer/src/HeadingAnalyzer";
import config from "../../../config";
import { UserConfig } from "../../../config/types";
import { useDemoData } from "../../../lib/use-demo-data";
import { IconButton, createUsePuck } from "@/core";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Drawer } from "@/core/components/Drawer";
import {
  ChevronUp,
  ChevronDown,
  Globe,
  Lock,
  Unlock,
  Type,
} from "lucide-react";
import {
  Button,
  TabList,
  Tab,
  Title1,
  List,
  ListItem,
} from "@fluentui/react-components";

const usePuck = createUsePuck<UserConfig>();

const CustomHeader = ({ onPublish }: { onPublish: (data: Data) => void }) => {
  const getPuck = useGetPuck();
  const dispatch = usePuck((s) => s.dispatch);
  const previewMode = usePuck((s) => s.appState.ui.previewMode);

  const toggleMode = () => {
    dispatch({
      type: "setUi",
      ui: {
        previewMode: previewMode === "edit" ? "interactive" : "edit",
      },
    });
  };

  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        padding: "var(--spacingHorizontalM, 16px) var(--spacingHorizontalXL, 24px)",
        background: "var(--colorNeutralBackground1)",
        color: "var(--colorNeutralForeground1)",
        alignItems: "center",
        borderBottom: "1px solid var(--colorNeutralStroke2)",
      }}
      onClick={() => dispatch({ type: "setUi", ui: { itemSelector: null } })}
      role="banner"
      tabIndex={0}
    >
      <Title1 as="h1" tabIndex={0} style={{ fontWeight: 600 }}>
        Custom UI example
      </Title1>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <div style={{ gap: 8, display: "flex" }}>
          <Button appearance="secondary" onClick={toggleMode}>
            Switch to {previewMode === "edit" ? "interactive" : "edit"}
          </Button>
          <Button
            appearance="primary"
            onClick={() => onPublish(getPuck().appState.data)}
            icon={<Globe size={14} />}
          >
            Publish
          </Button>
        </div>
      </div>
    </header>
  );
};

const Tabs = ({
  tabs,
  onTabCollapse,
  scrollTop,
}: {
  tabs: { label: string; body: ReactNode }[];
  onTabCollapse: () => void;
  scrollTop: number;
}) => {
  const [currentTab, setCurrentTab] = useState(-1);
  const itemSelector = usePuck((s) => s.appState.ui.itemSelector);
  const isDragging = usePuck((s) => s.appState.ui.isDragging);

  const currentTabRef = useRef(currentTab);

  useEffect(() => {
    if (currentTabRef.current !== -1 && itemSelector) {
      setCurrentTab(1);
    }
  }, [itemSelector]);

  useEffect(() => {
    currentTabRef.current = currentTab;
  }, [currentTab]);

  useEffect(() => {
    if (isDragging && currentTab === 1) {
      setCurrentTab(-1);
    }
  }, [currentTab, isDragging]);

  useEffect(() => {
    if (scrollTop === 0) {
      setCurrentTab(-1);
      onTabCollapse();
    }
  }, [scrollTop]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "var(--colorNeutralBackground1)",
        pointerEvents: "all",
        borderTop: "1px solid var(--colorNeutralStroke2)",
        boxShadow: "var(--shadow4, 0px 0px 6px 0px rgba(140,152,164,0.25))",
      }}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "var(--spacingHorizontalM, 16px)",
          paddingRight: "var(--spacingHorizontalM, 16px)",
          borderBottom: "1px solid var(--colorNeutralStroke2)",
          overflowX: "auto",
        }}
      >
        <TabList selectedValue={currentTab} onTabSelect={(_, data) => setCurrentTab(Number(data.value))}>
          {tabs.map((tab, idx) => (
            <Tab key={idx} value={idx}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div>
            <IconButton
              onClick={() => {
                setCurrentTab(currentTab === -1 ? 0 : -1);

                if (currentTab !== -1) {
                  onTabCollapse();
                } else {
                  setTimeout(() => {
                    document
                      .querySelector("#action-bar")
                      ?.scroll({ top: 128, behavior: "smooth" });
                  }, 25);
                }
              }}
              title={currentTab !== -1 ? "Collapse Tabs" : "Expand Tabs"}
            >
              {currentTab === -1 ? <ChevronUp /> : <ChevronDown />}
            </IconButton>
          </div>
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        {tabs.map((tab, idx) => {
          const isCurrentTab = currentTab === idx;
          return (
            <div
              key={idx}
              style={{
                display: isCurrentTab ? "block" : "none",
              }}
            >
              {tab.body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CustomPuck = ({ dataKey }: { dataKey: string }) => {
  const [hoveringTabs, setHoveringTabs] = useState(false);

  const [actionBarScroll, setActionBarScroll] = useState(0);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
        <CustomHeader
          onPublish={async (data: Data) => {
            // Remove broken publish logic (path/setData not in scope for CustomHeader)
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          overflowY: hoveringTabs ? "hidden" : "auto",
          zIndex: 0,
        }}
      >
        <Puck.Preview />
      </div>
      <div
        id="action-bar"
        style={{
          position: "fixed",
          bottom: 0,
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
          paddingTop: "calc(100vh - 58px)",
          pointerEvents: hoveringTabs ? undefined : "none",
          zIndex: 1,
          overscrollBehavior: "none",
        }}
        onTouchStart={() => setHoveringTabs(false)}
        onScrollCapture={(e) => {
          setActionBarScroll(e.currentTarget.scrollTop);
        }}
      >
        <div
          style={{
            background: "var(--colorNeutralBackground1)",
            position: "relative",
            pointerEvents: "none",
            zIndex: 0,
          }}
          onMouseOver={(e) => {
            e.stopPropagation();
            setHoveringTabs(true);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setHoveringTabs(true);
          }}
          onMouseOut={() => {
            setHoveringTabs(false);
          }}
        >
          {/* Force react to render when hoveringTabs changes, otherwise scroll gets trapped */}
          {hoveringTabs && <span />}
          <Tabs
            onTabCollapse={() => {
              setTimeout(() => setHoveringTabs(false), 50);
            }}
            scrollTop={actionBarScroll}
            tabs={[
              { label: "Components", body: <Puck.Components /> },
              { label: "Fields", body: <Puck.Fields /> },
              { label: "Outline", body: <Puck.Outline /> },
              {
                label: "Headings",
                body: (
                  <div style={{ padding: 24 }}>
                    <HeadingAnalyzer />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const CustomDrawer = () => {
  const getPermissions = usePuck((s) => s.getPermissions);

  return (
    <Drawer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
          pointerEvents: "all",
          padding: "16px",
          background: "var(--colorNeutralBackground2)",
          gap: 8,
        }}
      >
        {Object.keys(config.components).map((componentKey, componentIndex) => {
          const canInsert = getPermissions({
            type: componentKey as keyof UserConfig["components"],
          }).insert;

          return (
            <Drawer.Item
              key={componentKey}
              name={componentKey}
              isDragDisabled={!canInsert}
            />
          );
        })}
      </div>
    </Drawer>
  );
};

export function Client({ path, isEdit }: { path: string; isEdit: boolean }) {
  const { data, resolvedData, key, setData } = useDemoData({
    path,
    isEdit,
  });

  const [lockedComponents, setLockedComponents] = useState<
    Record<string, boolean>
  >({});

  const configOverride: UserConfig = {
    ...config,
    components: {
      ...Object.keys(config.components).reduce((acc, componentKey) => {
        return {
          ...acc,
          [componentKey]: {
            ...acc[componentKey as keyof UserConfig["components"]],
            resolvePermissions: (data: any, { permissions }: any) => {
              if (lockedComponents[data.props.id]) {
                return {
                  drag: false,
                  edit: false,
                  duplicate: false,
                  delete: false,
                };
              }

              return permissions;
            },
          },
        };
      }, config.components),
    },
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isEdit) {
    return (
      <Puck<UserConfig>
        config={configOverride}
        data={data}
        iframe={{ enabled: false }}
        headerPath={path}
        permissions={{
          lockable: true,
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
                  readOnly={readOnly}
                  field={{ type: "text" }}
                  onChange={onChange}
                  value={value}
                />
              </FieldLabel>
            ),
          },
          outline: ({ children }) => (
            <div style={{ padding: "var(--spacingHorizontalM, 16px)" }}>{children}</div>
          ),
          componentOverlay: ({ hover, isSelected }) => {
            return (
              <div
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
                aria-hidden={!hover && !isSelected}
                role="presentation"
                tabIndex={-1}
              />
            );
          },
          actionBar: ({ children, label, parentAction }) => {
            const selectedItem = usePuck((s) => s.selectedItem);
            const getPermissions = usePuck((s) => s.getPermissions);
            const refreshPermissions = usePuck((s) => s.refreshPermissions);

            const globalPermissions = getPermissions();

            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              if (selectedItem) {
                // We have to force refresh the permission resolver to refresh, since it relies on lockedComponents state
                // Without this, the resolver won't trigger as no props will have changed
                refreshPermissions({ item: selectedItem });
              }
              // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [lockedComponents, selectedItem?.props.id, refreshPermissions]);

            if (!selectedItem)
              return (
                <ActionBar aria-label={label || "Component actions"}>
                  <ActionBar.Group>
                    {parentAction}
                    {label && <ActionBar.Label label={label} />}
                  </ActionBar.Group>
                  <ActionBar.Group>{children}</ActionBar.Group>
                </ActionBar>
              );

            const isLocked = !!lockedComponents[selectedItem.props.id];

            return (
              <ActionBar aria-label={label || "Component actions"}>
                <ActionBar.Group>
                  {parentAction}
                  {label && <ActionBar.Label label={label} />}
                </ActionBar.Group>
                <ActionBar.Group>
                  {children}
                  {globalPermissions.lockable && (
                    <ActionBar.Action
                      onClick={() => {
                        setLockedComponents({
                          ...lockedComponents,
                          [selectedItem.props.id as string]: !isLocked,
                        });

                        refreshPermissions({ item: selectedItem });
                      }}
                      label={isLocked ? "Unlock component" : "Lock component"}
                      aria-pressed={isLocked}
                      // Visual styling moved to a wrapping span for compliance
                    >
                      <span
                        style={{
                          color: isLocked
                            ? "var(--colorPaletteRedForeground1)"
                            : "var(--colorBrandForeground1)",
                          outline: isLocked
                            ? "2px solid var(--colorPaletteRedBorderActive)"
                            : undefined,
                        }}
                      >
                        {isLocked ? <Unlock size={16} /> : <Lock size={16} />}
                      </span>
                    </ActionBar.Action>
                  )}
                </ActionBar.Group>
              </ActionBar>
            );
          },
          drawer: () => <CustomDrawer />,
          puck: () => <CustomPuck dataKey={key} />,
        }}
      />
    );
  }

  if (data) {
    return <Render<UserConfig> config={config} data={resolvedData} />;
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
