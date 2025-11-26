import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// console.log("Environment Variables:", import.meta.env);

export default defineConfig({
  plugins: [react()],
  base: '/'
});
