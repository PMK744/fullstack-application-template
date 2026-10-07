import react from '@vitejs/plugin-react'

import { readdirSync } from 'node:fs'
import { extname, relative, resolve } from 'node:path'

import { defineConfig } from 'vite'

const rootDirectory = import.meta.dirname;
const viewsDirectory = resolve(rootDirectory, 'scripts', 'views');
const webRoot = resolve(rootDirectory, 'wwwroot');

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "react-native": resolve(rootDirectory, "node_modules/react-native-web"),
      "@pmkerby/components": resolve(
        import.meta.dirname,
        "../../packages/components/src",
      ),
    },
  },
  build: {
    outDir: webRoot,
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      input: getViewEntries(),
      output: {
        entryFileNames: 'views/[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})

function getViewEntries() {
  const entries: Record<string, string> = {}
  const viewExtensions = new Set(['.js', '.jsx', '.ts', '.tsx'])

  for (const file of readdirSync(viewsDirectory, {
    recursive: true,
    withFileTypes: true,
  })) {
    if (!file.isFile() || !viewExtensions.has(extname(file.name))) {
      continue
    }

    const filePath = resolve(file.parentPath, file.name)
    const relativePath = relative(viewsDirectory, filePath)
    const entryName = relativePath.replace(/\.[^.]+$/, '').replaceAll('\\', '/')

    entries[entryName] = filePath
  }

  return entries
}
