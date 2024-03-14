import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(
    {
        svgrOptions: {
        icon: true
        }
    }
  )],
});
