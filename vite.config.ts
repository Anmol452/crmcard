import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  define:{
      'process.env.VITE_URL':JSON.stringify(process.env.VITE_URL)
  },

  server: {
    allowedHosts: ['floppy-carpets-stop.loca.lt'],
  },


})
