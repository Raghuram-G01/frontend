import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 important
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: "ws",
      host: "51.20.66.94", // 👈 public IP
      port: 5173,
    },
  },
});
