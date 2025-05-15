import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Testing-landingpage-for-my-YouTube-chanell/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mui/icons-material/Language'],
  },
})

