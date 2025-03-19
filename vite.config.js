import { defineConfig } from "vite";
import { resolve } from "node:path";

const config = defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        detail: resolve(__dirname, "detail.html"),
        flagship: resolve(__dirname, "flagship.html"),
        //여기에다가 만드는 페이지 다 추가하기!
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});

export default config;
