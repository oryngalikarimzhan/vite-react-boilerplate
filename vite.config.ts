/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global";`,
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
