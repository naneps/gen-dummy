import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config(); 

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  mode: 'development',
  define: {
    'process.env.PROJECT_URL': JSON.stringify(process.env.PROJECT_URL),
    'process.env.OPEN_AI_KEY.': JSON.stringify(process.env.OPEN_AI_KEY),
    'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY),
  },
});
