import { Info, Plugin, PluginInfo, PluginType } from '@cloudcue/sdk/contracts';
import { MockProcessorUUID, MockProcessor } from './processor';

interface MockPluginConfiguration {
  myNumber: number;
}

export const MockPluginUUID = 'f240f15b-708a-41ba-a1ba-0979c67a62f1';

export const MockPluginInfo: PluginInfo<MockPluginConfiguration> = {
  type: PluginType.CorePlugin,
  uuid: MockPluginUUID,
  id: 'EXAMPLE-MOCK-TS',
  icon: '',
  label: 'Example Mock Plugin (TS)',
  description: '',
  configurationInfo: { default: { data: { myNumber: 1 } } },
  uxInfo: {},
};

export class MockPlugin implements PluginInfo<MockPluginConfiguration>, Plugin<MockPluginConfiguration> {
  async start(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async stop(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async systemReady(): Promise<void> {
    // throw new Error('Method not implemented.');
  }

  // Static metadata from info POJO
  readonly type = MockPluginInfo.type;
  readonly uuid = MockPluginInfo.uuid;
  readonly id = MockPluginInfo.id;
  readonly icon = MockPluginInfo.icon;
  readonly label = MockPluginInfo.label;
  readonly description = MockPluginInfo.description;
  readonly configurationInfo = MockPluginInfo.configurationInfo;
  readonly uxInfo = MockPluginInfo.uxInfo;

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
