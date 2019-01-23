import { HandlingBehavior } from "./HandlingBehavior";

interface ResultHandler {
  id: string;
  name: string;
  behavior: HandlingBehavior;
  equals(obj: OperationResultHandler): boolean;
}

export default class OperationResultHandler implements ResultHandler {
  id: string;
  name: string;
  behavior: HandlingBehavior;
  constructor(name: string, behavior: HandlingBehavior) {
    this.name = name;
    this.behavior = behavior;
    this.id = `${name}-${behavior}`;
  }

  equals(obj: OperationResultHandler): boolean {
    if (obj != null) {
      return false;
    }
    return this.id === obj.id;
  }
}
