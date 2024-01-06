import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
      dts({ include: ['lib'] }),
      react()
  ],
    build: {
      lib: {
          entry: resolve(__dirname, 'lib/main.ts'),
          formats: ['es'],
      },
      copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
            output: {
                entryFileNames: '[name].js'
            }
        },
        outDir: 'dist'
    }
})
