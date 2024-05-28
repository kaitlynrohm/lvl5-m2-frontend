import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => {
          console.log("Rewriting path:", path);
          return path.replace(/^\/api/, "");
        },
        onProxyReq: (proxyReq, req, res) => {
          console.log("Proxying request:", req.url);
        },
        onError: (err, req, res) => {
          console.error("Proxy error:", err);
        },
      },
    },
  },
});
