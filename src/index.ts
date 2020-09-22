import { MockPlugin } from './plugin';
import * as c1 from '@cloudcue/contracts';

export function createPlugin(): c1.Plugin {
  return new MockPlugin();
}
