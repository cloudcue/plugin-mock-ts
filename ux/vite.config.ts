import { defineUxPluginConfig } from '@cloudcue/vite-config/plugin-ux';

export default defineUxPluginConfig({
  // Vite config overrides if needed
}, {
  entry: 'src/plugin.ts',
  outDir: '../dist/public/ux',
  formats: ['es'],
});
