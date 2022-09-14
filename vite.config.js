import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import babel from 'vite-plugin-babel';
import path from 'path';
/* import { viteStaticCopy } from 'vite-plugin-static-copy'; */

export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"),
    },
  },
  assetsInclude: ['**/*.json'],
  plugins: [
    ViteMinifyPlugin({}),
    babel(),
    /* viteStaticCopy({
      targets: [
        {
          src: path.join(__dirname, 'src/assets/API-MCU.json'),
          dest: 'assets'
        }
      ]
    }), */
  ],
})

