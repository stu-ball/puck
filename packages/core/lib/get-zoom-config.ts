import { getBox } from "css-box-model";
import { AppState } from "../types";

const RESET_ZOOM_SMALLER_THAN_FRAME = true;

export const getZoomConfig = (
  uiViewport: AppState["ui"]["viewports"]["current"],
  frame: HTMLElement,
  zoom: number
) => {
  const box = getBox(frame);

  const { width: frameWidth, height: frameHeight } = box.contentBox;

  // Normalize viewport height/width with safe fallbacks
  const viewportHeightRaw =
    uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  const viewportWidthRaw = uiViewport.width;

  const viewportWidth =
    typeof viewportWidthRaw === "number" && Number.isFinite(viewportWidthRaw) && viewportWidthRaw > 0
      ? viewportWidthRaw
      : frameWidth;

  const viewportHeight =
    typeof viewportHeightRaw === "number" && Number.isFinite(viewportHeightRaw) && viewportHeightRaw > 0
      ? viewportHeightRaw
      : frameHeight;

  // Ensure zoom is a finite positive number
  zoom = typeof zoom === "number" && Number.isFinite(zoom) && zoom > 0 ? zoom : 1;

  let rootHeight = 0;
  let autoZoom = 1;

  if (viewportWidth > frameWidth || viewportHeight > frameHeight) {
    const widthZoom = Math.min(frameWidth / viewportWidth, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);

    // Start with width-based zoom then adjust
    zoom = widthZoom;

    if (widthZoom < heightZoom) {
      // Avoid division by zero
      rootHeight = Number.isFinite(zoom) && zoom !== 0 ? viewportHeight / zoom : viewportHeight;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }

    autoZoom = Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }

  // Final sanitization to prevent NaN or non-finite values
  if (!Number.isFinite(rootHeight) || rootHeight <= 0) {
    rootHeight = viewportHeight || frameHeight || 0;
  }
  if (!Number.isFinite(autoZoom) || autoZoom <= 0) {
    autoZoom = 1;
  }
  if (!Number.isFinite(zoom) || zoom <= 0) {
    zoom = 1;
  }

  return { autoZoom, rootHeight, zoom };
};
