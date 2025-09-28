// apps/demo/pages/api/pages/[...path].ts

import type { NextApiRequest, NextApiResponse } from "next";
import {
  getPage,
  updatePage,
  deletePage,
  PageData,
} from "../../../lib/data-provider";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Support dynamic route: /api/pages/[...path]
  const pathKey =
    "/" +
    (Array.isArray(req.query.path)
      ? req.query.path.join("/")
      : req.query.path || "");

  if (req.method === "GET") {
    // Get a single page
    const page = await getPage(pathKey);
    if (!page) {
      res.status(404).json({ error: "Page not found" });
      return;
    }
    res.status(200).json(page);
    return;
  }

  if (req.method === "PUT") {
    // Update a page
    const { data } = req.body as { data: PageData };
    if (!data) {
      res.status(400).json({ error: "Missing data" });
      return;
    }
    try {
      await updatePage(pathKey, data);
      res.status(200).json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  if (req.method === "DELETE") {
    // Delete a page
    try {
      await deletePage(pathKey);
      res.status(200).json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
    return;
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}