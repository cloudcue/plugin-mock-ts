import { defineServerPluginConfig } from '@cloudcue/vite-config/plugin-server';

export default defineServerPluginConfig({
  // Vite config overrides if needed
}, {
  entry: 'src/index.ts',
  copyPublic: true,
  compileTemplates: true,
  createArtifact: false,
});
