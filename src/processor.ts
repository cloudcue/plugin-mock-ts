// import { Processor, ProcessorState, ProcessorContext } from '../../contracts';

interface MockProcessorConfiguration {
  myNumber: number;
}

export const MockProcessorUUID = 'd9d52b10-0098-4d52-aa46-cdd572805c39';
export class MockProcessor {
  uuid = MockProcessorUUID;
  id = 'EXAMPLE-MOCK-TS';
  label = 'Example Mock Processor (TS)';
  description = '';
  state = 0; //ProcessorState.stopped;
  initialState = 0; //ProcessorState.stopped;
  initialConfiguration = { data: undefined, version: '' };
  profiles = [];

  private _context?: any;
  get context(): any {
    if (this._context) {
      return this._context;
    } else {
      throw new Error('init not called');
    }
  }

  get configuration(): MockProcessorConfiguration {
    return this.context.configuration.data as MockProcessorConfiguration;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  init(_context: unknown): void {
    // this._context = context;
    // this._configuration = configuration;
  }
  async start(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async stop(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
  async systemReady(): Promise<void> {
    // throw new Error('Method not implemented.');
  }
}
