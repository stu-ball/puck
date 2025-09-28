// apps/demo/pages/api/pages/__tests__/pages-api.test.ts

import { createMocks } from 'node-mocks-http';
import indexHandler from '../index';
import pathHandler from '../[...path]';
import * as fs from 'fs/promises';
import * as path from 'path';

const DB_PATH = path.join(process.cwd(), 'apps/demo/database.json');

describe('Pages API', () => {
  let originalDb: string;

  beforeAll(async () => {
    // Backup original DB
    originalDb = await fs.readFile(DB_PATH, 'utf-8');
  });

  afterAll(async () => {
    // Restore original DB
    await fs.writeFile(DB_PATH, originalDb, 'utf-8');
  });

  describe('GET /api/pages', () => {
    it('should list all pages', async () => {
      const { req, res } = createMocks({ method: 'GET' });
      await indexHandler(req, res);
      expect(res._getStatusCode()).toBe(200);
      const data = JSON.parse(res._getData());
      expect(typeof data).toBe('object');
      expect(data['/']).toBeDefined();
    });
  });

  describe('POST /api/pages', () => {
    it('should create a new page', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          path: '/test-page',
          data: {
            content: [],
            root: { props: {} },
            zones: {},
          },
        },
      });
      await indexHandler(req, res);
      expect(res._getStatusCode()).toBe(201);
      const db = JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
      expect(db['/test-page']).toBeDefined();
    });

    it('should not create a page with missing data', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: { path: '/bad-page' },
      });
      await indexHandler(req, res);
      expect(res._getStatusCode()).toBe(400);
    });
  });

  describe('GET /api/pages/[...path]', () => {
    it('should get a single page', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: { path: ['test-page'] },
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(200);
      const data = JSON.parse(res._getData());
      expect(data).toBeDefined();
    });

    it('should return 404 for missing page', async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: { path: ['does-not-exist'] },
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(404);
    });
  });

  describe('PUT /api/pages/[...path]', () => {
    it('should update an existing page', async () => {
      const { req, res } = createMocks({
        method: 'PUT',
        query: { path: ['test-page'] },
        body: {
          data: {
            content: [{ type: 'Test', props: {} }],
            root: { props: { title: 'Updated' } },
            zones: {},
          },
        },
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(200);
      const db = JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
      expect(db['/test-page'].root.props.title).toBe('Updated');
    });

    it('should return 400 for missing data', async () => {
      const { req, res } = createMocks({
        method: 'PUT',
        query: { path: ['test-page'] },
        body: {},
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(400);
    });
  });

  describe('DELETE /api/pages/[...path]', () => {
    it('should delete an existing page', async () => {
      const { req, res } = createMocks({
        method: 'DELETE',
        query: { path: ['test-page'] },
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(200);
      const db = JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
      expect(db['/test-page']).toBeUndefined();
    });

    it('should return 400 for deleting non-existent page', async () => {
      const { req, res } = createMocks({
        method: 'DELETE',
        query: { path: ['does-not-exist'] },
      });
      await pathHandler(req, res);
      expect(res._getStatusCode()).toBe(400);
    });
  });
});