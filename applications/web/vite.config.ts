import react from '@vitejs/plugin-react'

import { readdirSync } from 'node:fs'
import { extname, relative, resolve } from 'node:path'

import { defineConfig, type Plugin } from 'vite'

const rootDirectory = import.meta.dirname;
const viewsDirectory = resolve(rootDirectory, 'scripts', 'views');
const layoutModule = resolve(viewsDirectory, '_layout.tsx');
const webRoot = resolve(rootDirectory, 'wwwroot');

const viewEntryPrefix = 'view-entry:';

export default defineConfig({
  plugins: [react(), viewEntries()],
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".jsx", ".js"],
    // Bun's isolated installs give each workspace its own copy; resolve these
    // from this application so shared packages never load a second instance.
    dedupe: ["react", "react-dom", "tamagui"],
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
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        // Shared stylesheet referenced directly by Views/Shared/_Layout.cshtml.
        layout: resolve(viewsDirectory, '_layout.css'),
        ...getViewEntries(),
      },
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
    // Files prefixed with `_` (e.g. `_layout.tsx`) are shared by views, not views themselves.
    if (
      !file.isFile() ||
      file.name.startsWith('_') ||
      !viewExtensions.has(extname(file.name))
    ) {
      continue
    }

    const filePath = resolve(file.parentPath, file.name)
    const relativePath = relative(viewsDirectory, filePath)
    const entryName = relativePath.replace(/\.[^.]+$/, '').replace(/\\/g, '/')

    entries[entryName] = viewEntryPrefix + filePath
  }

  return entries
}

/**
 * Generates an entry for each view that mounts its default export inside
 * `_layout.tsx`, so view files only export a component.
 */
function viewEntries(): Plugin {
  const toImportPath = (path: string) => JSON.stringify(path.replace(/\\/g, '/'))

  return {
    name: 'view-entries',
    resolveId(id) {
      return id.startsWith(viewEntryPrefix) ? `\0${id}` : null
    },
    load(id) {
      if (!id.startsWith(`\0${viewEntryPrefix}`)) {
        return null
      }

      const viewModule = id.slice(viewEntryPrefix.length + 1)

      return [
        `import { mount } from ${toImportPath(layoutModule)}`,
        `import View from ${toImportPath(viewModule)}`,
        `mount(View)`,
      ].join('\n')
    },
  }
}
