import { AuthorizeApi } from "../Api";

export interface ProxyManager {
  authorizeApi: AuthorizeApi;
}

export class DefaultProxyManager implements ProxyManager {
  public authorizeApi: AuthorizeApi;
  public constructor(authorizeApi: AuthorizeApi) {
    this.authorizeApi = authorizeApi;
  }
}
