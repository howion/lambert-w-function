import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    platform: 'neutral',
    minify: false,
    treeshake: true,
    splitting: false,
    sourcemap: false,
    clean: true,
    dts: true,
    outDir: 'dist'
})
