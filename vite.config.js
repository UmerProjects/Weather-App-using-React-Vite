import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Weather-App-using-React-Vite",
  plugins: [react()],
  // define process env
  define: {
    'process.env': process.env
  },
  
})
