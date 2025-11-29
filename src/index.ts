import { MockPlugin } from './plugin';
import * as c1 from '@cloudcue/sdk/contracts';

export const info: c1.PluginInfo = new MockPlugin();

export function createPlugin(): c1.Plugin {
  return new MockPlugin();
}
