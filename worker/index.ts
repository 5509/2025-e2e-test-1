// worker/index.ts
import { serveStatic } from 'wrangler';

export default {
  async fetch(request: Request): Promise<Response> {
    return serveStatic(request);
  },
};