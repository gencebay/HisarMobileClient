import { injectable, inject } from "inversify";
import { HeaderProvider } from "./DefaultHeaderProvider";
import { TYPES } from "../Types";

export interface RestClient {
  headerProvider: HeaderProvider;
}

@injectable()
export class DefaultRestClient {
  public headerProvider: HeaderProvider;
  public constructor(
    @inject(TYPES.HeaderProvider) headerProvider: HeaderProvider
  ) {
    this.headerProvider = headerProvider;
  }
}
