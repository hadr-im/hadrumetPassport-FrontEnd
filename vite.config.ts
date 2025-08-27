import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'Hadrumet Passport',
        short_name: 'Passport',
        description: 'Your digital passport for Hadrumet',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'images/icons/splash-128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'images/icons/splash-256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'images/icons/splash-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.cjs", // ensure Tailwind works
  },
  server: {
    host: "localhost", // use "0.0.0.0" if running inside Docker/VM
    port: 5173,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
    },
  },
});
