import OperationResultHandler from "./OperationResultHandler";

export interface OperationResult {
  handler: OperationResultHandler;
  message: string;
  value: any;
}

export interface OperationResultOfT<T extends any> extends OperationResult {
  result: T;
}
