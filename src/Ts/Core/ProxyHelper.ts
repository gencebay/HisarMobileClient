import { interfaces } from "inversify";
import { ProxyInvoker, HeaderProvider, RoundRobinManager } from "../Core";
import { TYPES } from "../Types";
import { ApiContract } from "../Api/";

export namespace ProxyHelper {
  export function createProxy<T extends ApiContract>(
    type: any,
    resolver: interfaces.Container,
    serviceIdentifier: string | symbol
  ): T {
    const headerProvider = resolver.get<HeaderProvider>(TYPES.HeaderProvider);
    const roundRobinManager = resolver.get<RoundRobinManager>(
      TYPES.RoundRobinManager
    );
    const instance = new type();

    Object.getOwnPropertyNames(instance).forEach(key => {
      let prop = Object.getOwnPropertyDescriptor(instance, key);
      if (key != "getType" && typeof prop.value == "function") {
        const invoker = new ProxyInvoker(
          key,
          roundRobinManager,
          headerProvider
        );
        instance[key] = new Proxy(instance[key], invoker);
      }
    });

    return instance;
  }
}
