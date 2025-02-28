import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: []
  },
  define: {
    "process.env": {}
  }
});

