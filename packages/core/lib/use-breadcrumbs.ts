import { useMemo } from "react";
import { useAppStore, useAppStoreApi } from "../store";
import { ItemSelector } from "./data/get-item";

export type Breadcrumb = {
  label: string;
  selector: ItemSelector | null;
  zoneCompound?: string;
};

export const useBreadcrumbs = (renderCount?: number) => {
  const selectedId = useAppStore((s) => s.selectedItem?.props.id);
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => s.state.indexes.nodes[selectedId]?.path);
  const appStore = useAppStoreApi();

  return useMemo<Breadcrumb[]>(() => {
    const breadcrumbs =
      path?.map((zoneCompound) => {
        const [componentId] = zoneCompound.split(":");

        if (componentId === "root") {
          return {
            label: "Page",
            selector: null,
          };
        }

        const node = appStore.getState().state.indexes.nodes[componentId];
        if (!node || !node.path || !Array.isArray(node.path) || node.path.length === 0) {
          return {
            label: "Component",
            selector: null,
          };
        }
        const parentId = node.path[node.path.length - 1];
        const contentIds =
          appStore.getState().state.indexes.zones[parentId]?.contentIds || [];
        const index = contentIds.indexOf(componentId);

        const label = config.components[node.data.type]?.label ?? node.data.type;

        return {
          label,
          selector: {
            index,
            zone: node.path[node.path.length - 1],
          },
        };
      }) || [];

    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }

    return breadcrumbs;
  }, [path, renderCount]);
};
