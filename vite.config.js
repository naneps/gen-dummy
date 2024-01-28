import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

dotenv.config(); 

export default deVSDVfineConfig({
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
