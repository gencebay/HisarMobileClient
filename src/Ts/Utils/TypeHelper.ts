import { OperationResult, OperationResultOfT } from "../Models";

export namespace TypeHelper {
  export function isOperationT<T extends any>(
    obj: OperationResult | OperationResultOfT<T>
  ): obj is OperationResultOfT<T> {
    return (<OperationResultOfT<T>>obj).result !== undefined;
  }
}
