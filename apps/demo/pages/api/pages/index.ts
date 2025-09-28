// apps/demo/pages/api/pages/index.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { listPages, createPage, PageData } from "../../../lib/data-provider";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // List all pages
    try {
      const pages = await listPages();
      res.status(200).json(pages);
    } catch (err) {
      // Log the error for debugging
      // eslint-disable-next-line no-console
      console.error("API /api/pages GET error:", err);
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

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}