import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import typescript from '@rollup/plugin-typescript'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src'),
      name: "nmmm",
      fileName: "index"
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
