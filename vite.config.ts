import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use esbuild instead of terser for better compatibility
    minify: mode === 'production' ? 'esbuild' : false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', '@radix-ui/react-avatar'],
        },
      },
    },
    // Compress assets
    cssMinify: true,
    // Generate source maps for debugging
    sourcemap: mode === 'development',
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: ['react', 'react-dom', 'lucide-react'],
  },
  // Enable compression
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
}));
