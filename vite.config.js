import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  
    },
  },
});