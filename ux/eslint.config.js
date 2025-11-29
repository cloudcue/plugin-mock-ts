import { defineConfigForLib } from '@cloudcue/eslint-config/lib';

export default [
  ...defineConfigForLib({ tests: false }),
  {
    ignores: ['**/dist/**', '**/lib/**', '**/node_modules/**'],
  },
];
