import { MqttClient, IClientOptions } from 'mqtt';

export interface Error {
  name: string;
  message: string;
  stack?: string;
}

export interface ConnectorProps {
  brokerUrl: string;
  options?: IClientOptions;
  parserMethod?: (message: any) => string;
  children: React.ReactNode;
}

export interface IMqttContext {
  connectionStatus: connectionStatus;
  client?: MqttClient | null;
  parserMethod?: (message: any) => string;
}

export type connectionStatus = "Connecting" | "Connected" | "Reconnecting" | "Offline" | Error;

export interface IMessageStructure {
  [key: string]: string;
}

export interface IMessage {
  topic: string;
  message?: string | IMessageStructure;
}

export interface IUseSubscription {
  topic: string | string[];
  client?: MqttClient | null;
  message?: IMessage;
  connectionStatus: connectionStatus;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
