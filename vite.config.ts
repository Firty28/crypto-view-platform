import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    },
  },
})
