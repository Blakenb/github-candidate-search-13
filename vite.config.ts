import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  envDir: "environment",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@api": "/src/api",
      "@interfaces": "/src/interfaces",
    },
  },
  server: {
    host: "0.0.0.0", // Ensures it binds to all interfaces
    port: 5173, // Default Vite port
    strictPort: true, // Ensures Vite uses the specified port
    allowedHosts: ["github-candidate-search-13-2.onrender.com"], // Allow Render host
  },
});
