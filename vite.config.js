import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui-v1": path.resolve(__dirname, "./src/Components/Ui/V1"),
      "@ui-v2": path.resolve(__dirname, "./src/Components/Ui/V2"),
      "@ui-v3": path.resolve(__dirname, "./src/Components/Ui/V3"),
    },
  },
});
