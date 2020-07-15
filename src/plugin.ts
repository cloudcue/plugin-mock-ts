import { MockProcessorUUID, MockProcessor } from './processor';

interface MockPluginConfiguration {
  myNumber: number;
}

export const MockPluginUUID = 'f240f15b-708a-41ba-a1ba-0979c67a62f1';
export class MockPlugin {
  uuid = MockPluginUUID;
  id = 'EXAMPLE-MOCK-TS';
  label = 'Example Mock Plugin (TS)';
  description = '';
  initialConfiguration = { data: { myNumber: 99 }, version: '1' };

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
