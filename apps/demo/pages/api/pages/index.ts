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
        res.status(200).json(pages["/"].data ?? pages["/"]);
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
    const data = req.body as PageData;
    if (!data) {
      res.status(400).json({ error: "Missing data" });
      return;
    }
    try {
      // Always update the homepage at "/"
      await import("../../../lib/data-provider").then(({ updatePage }) =>
        updatePage("/", data)
      );
      res.status(200).json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  res.setHeader("Allow", ["GET", "POST", "PUT"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}