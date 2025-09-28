// apps/demo/pages/api/pages/index.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { listPages, createPage, PageData } from "../../../lib/data-provider";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // List all pages
    let pages;
    try {
      pages = await listPages();
      // Debug: log loaded keys
      // eslint-disable-next-line no-console
      console.log("API /api/pages GET: loaded keys", Object.keys(pages));
      res.setHeader("Cache-Control", "no-store");
      if ("/" in pages) {
        // Return .data for homepage to match frontend expectations
        // Always return the flat data object, not wrapped in .data
        const homepage = pages["/"];
        res.status(200).json(homepage);
      } else {
        res.status(404).json({ error: "Page not found" });
      }
    } catch (err) {
      // Log the error for debugging
      // eslint-disable-next-line no-console
      if (typeof pages !== "undefined") {
        console.error("API /api/pages GET error:", err, "pages object:", pages);
      } else {
        console.error("API /api/pages GET error:", err);
      }
      res.status(500).json({ error: "Failed to load pages" });
    }
    return;
  }

  if (req.method === "POST") {
    // Create a new page
    const { path, data } = req.body as { path: string; data: PageData };
    if (!path || !data) {
      res.status(400).json({ error: "Missing path or data" });
      return;
    }
    try {
      await createPage(path, data);
      res.status(201).json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  if (req.method === "PUT") {
    // Update the homepage ("/")
    let data = req.body as PageData | { data: PageData };
    if (!data) {
      res.status(400).json({ error: "Missing data" });
      return;
    }
    // Accept both { data: PageData } and PageData directly
    let pageData: PageData;
    if ("data" in data) {
      pageData = (data as any).data;
    } else {
      pageData = data as PageData;
    }
    try {
      await (await import("../../../lib/data-provider")).updatePage("/", pageData);
      res.status(200).json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
    return;
      return;
  }

  // Fallback for unsupported methods
  res.setHeader("Allow", ["GET", "POST", "PUT"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}