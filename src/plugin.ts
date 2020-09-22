import { Info, Plugin, PluginInfo, PluginType } from '@cloudcue/contracts';
import { MockProcessorUUID, MockProcessor } from './processor';

interface MockPluginConfiguration {
  myNumber: number;
}

export const MockPluginUUID = 'f240f15b-708a-41ba-a1ba-0979c67a62f1';
export class MockPlugin implements PluginInfo, Plugin {
  async start(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async stop(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async systemReady(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  type = PluginType.GeneralPlugin;
  uuid = MockPluginUUID;
  id = 'EXAMPLE-MOCK-TS';
  icon = '';
  label = 'Example Mock Plugin (TS)';
  description = '';
  configurationInfo = { default: { data: { myNumber: 1 } } };
  uxInfo = {};

  private _context?: any;
  get context(): any {
    if (this._context) {
      return this._context;
    } else {
      throw new Error('init not called');
    }
  }

  get configuration(): MockPluginConfiguration {
    return this.context.configuration.data as MockPluginConfiguration;
  }

  createObjectInfo(uuid: string): Info<string> | undefined {
    switch (uuid) {
      case MockProcessorUUID:
        return new MockProcessor();
    }
    return undefined;
  }

  createObject(uuid: string): unknown {
    switch (uuid) {
      case MockProcessorUUID:
        return new MockProcessor();
    }
    return undefined;
  }

  init(context: any): void {
    this._context = context;
  }

  install(installer: any): void {
    installer.addProcessor(new MockProcessor());
  }

  uninstall(): void {
    // log.info('   ~ Mock Plugin Remove');
  }
}
