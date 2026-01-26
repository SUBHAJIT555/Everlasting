import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // optimizeDeps: {
  //   include: ["framer-motion", "gsap", "lenis"],
  //   esbuildOptions: {
  //     target: "es2015",
  //   },
  // },
  // build: {
  //   target: "es2017",
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("motion")) return "motion";
            if (id.includes("gsap")) return "gsap";
            if (id.includes("swiper")) return "swiper";
            if (id.includes("react-hook-form")) return "form";
            if (id.includes("react-datepicker")) return "datepicker";
            if (id.includes("swr")) return "swr";
            if (id.includes("lenis")) return "lenis";
            if (id.includes("react-router")) return "router";
            // fallback for all other node_modules
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/mail.php": {
  //       target: "http://localhost/exhibition",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
