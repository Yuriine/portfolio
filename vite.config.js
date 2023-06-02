import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //put your project name here for github pages my projecct name is portfolio
  base: '/portfolio/',
  


});

