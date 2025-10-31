import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // ✅ AGREGAR ESTA SECCIÓN PARA EL PROXY
  server: {
    proxy: {
      '/api': {
        target: 'https://formspree.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        configure: (proxy, options) => {
          // Logging opcional para debug
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('🔁 Proxy Request:', req.method, req.url)
          })
        }
      }
    }
  }
})