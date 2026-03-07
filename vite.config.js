import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. استيراد الملحق هنا

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. تفعيل الملحق هنا
  ],
  // 3. إذا كنت ترفع الموقع على Vercel كشاشة رئيسية، اجعل الـ base هكذا:
  base: '/',
})
