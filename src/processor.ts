import {
  Processor,
  ServiceState,
  ServiceInitialState,
  ServiceInitialStateInfo,
  ProcessorContext,
  ProcessorType,
  ProcessorInfo,
} from '@cloudcue/sdk/contracts';
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
  configurationInfo = { default: { data: undefined, version: '' } };
  uxInfo = {};

  // ServiceInfo
  initialState: ServiceInitialStateInfo = { default: ServiceInitialState.Default };

  // Service
  private _state = ServiceState.Stopped;
  get state(): ServiceState {
    return this._state;
  }

  private _context?: ProcessorContext;
  get context(): ProcessorContext {
    if (this._context) {
      return this._context;
    } else {
      throw new Error('init not called');
    }
  }

  get configuration(): MockProcessorConfiguration {
    return this.context.myConfiguration.data as MockProcessorConfiguration;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  init(context: ProcessorContext): void {
    this._context = context;
  }

  async start(): Promise<ServiceState> {
    this.context.log.info(`\n${this.id} - start\n`);
    setInterval(() => {
      this.context.log.info(`Timer From - ${this.id}`);
    }, 5000);
    this._state = ServiceState.Started;
    return this._state;
  }

  async stop(): Promise<ServiceState> {
    this.context.log.info(`\n${this.id} - stop\n`);
    this._state = ServiceState.Stopped;
    return this._state;
  }

  async systemReady(): Promise<void> {
    this.context.log.info(`\n${this.id} - ready\n`);
  }
}
