import { Processor, ProcessorState, ProcessorContext, ProcessorType, ProcessorInfo } from '@cloudcue/contracts';
import { setInterval } from 'timers';

interface MockProcessorConfiguration {
  myNumber: number;
}

export const MockProcessorUUID = 'd9d52b10-0098-4d52-aa46-cdd572805c39';
export class MockProcessor implements ProcessorInfo, Processor {
  type = ProcessorType.GeneralProcessor;
  uuid = MockProcessorUUID;
  id = 'EXAMPLE-MOCK-TS';
  icon = '';
  label = 'Example Mock Processor (TS)';
  description = '';
  state = ProcessorState.stopped;
  initialState = ProcessorState.stopped;
  configurationInfo = { default: { data: undefined, version: '' } };
  uxInfo = {};

  private _context?: ProcessorContext;
  get context(): ProcessorContext {
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
  init(context: ProcessorContext): void {
    this._context = context;
  }
  async start(): Promise<void> {
    this.context.log.info(`\n${this.id} - start\n`);
    // throw new Error('Method not implemented.');
    setInterval(() => {
      this.context.log.info(`Timer From - ${this.id}`);
    }, 5000);
  }
  async stop(): Promise<void> {
    this.context.log.info(`\n${this.id} - stop\n`);
    // throw new Error('Method not implemented.');
  }
  async systemReady(): Promise<void> {
    this.context.log.info(`\n${this.id} - ready\n`);
    // throw new Error('Method not implemented.');
  }
}
