/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true'
      ? visualizer({ filename: 'bundle-report.html', template: 'treemap', open: false, gzipSize: true, brotliSize: true })
      : null,
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom-vendor';
            if (id.includes('react')) return 'react-vendor';
            return 'vendor';
          }
        }
      }
    }
  }
})
