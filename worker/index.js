import { serveStatic } from 'wrangler';

export default {
  async fetch(request) {
    return serveStatic(request);
  },
};