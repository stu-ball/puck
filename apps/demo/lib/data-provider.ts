// apps/demo/lib/data-provider.ts

import * as fs from "fs/promises";
import * as path from "path";

const DB_PATH = path.join(process.cwd(), "database.json");

export interface PageData {
  content: any[];
  root: { props: Record<string, any> };
  zones: Record<string, any>;
}

async function readDB(): Promise<Record<string, PageData>> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    // If file doesn't exist, return empty object
    if ((e as any).code === "ENOENT") return {};
    throw e;
  }
}

async function writeDB(db: Record<string, PageData>): Promise<void> {
  const tmpPath = DB_PATH + ".tmp";
  await fs.writeFile(tmpPath, JSON.stringify(db, null, 2), "utf-8");
  await fs.rename(tmpPath, DB_PATH);
}

export async function getPage(pathKey: string): Promise<PageData | null> {
  const db = await readDB();
  return db[pathKey] || null;
}

export async function createPage(pathKey: string, data: PageData): Promise<void> {
  const db = await readDB();
  if (db[pathKey]) throw new Error("Page already exists");
  db[pathKey] = data;
  await writeDB(db);
}

export async function updatePage(pathKey: string, data: PageData): Promise<void> {
  // Read existing DB, merge with new data for this page
  const db = await readDB();
  db[pathKey] = {
    ...db[pathKey],
    ...data,
    // Always replace content/zones/root to avoid stale state
    content: data.content,
    zones: data.zones,
    root: data.root,
  };
  await writeDB(db);
}

export async function deletePage(pathKey: string): Promise<void> {
  const db = await readDB();
  if (!db[pathKey]) throw new Error("Page does not exist");
  delete db[pathKey];
  await writeDB(db);
}

export async function listPages(): Promise<Record<string, PageData>> {
  return await readDB();
}