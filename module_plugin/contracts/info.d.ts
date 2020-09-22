export enum ServiceProviderState {
  started,
  stopped,
  exception,
}

export interface Info {
  readonly uuid: string;
  readonly id: string;
  readonly label: string;
  readonly description: string;
}
