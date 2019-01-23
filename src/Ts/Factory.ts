import resolver from "./inversify.config";
import { AuthorizeApi } from "./Api";
import { APIs, TYPES } from "./Types";
import { ProxyHelper, RoundRobinManager } from "./Core";
import { AlbumApi } from "./Api/AlbumApi";

export namespace Factory {
  export function createAuthorizeApi(): AuthorizeApi {
    return ProxyHelper.createProxy<AuthorizeApi>(
      AuthorizeApi,
      resolver,
      APIs.AuthorizeApi
    );
  }

  export function createAlbumApi(): AlbumApi {
    return ProxyHelper.createProxy<AlbumApi>(AlbumApi, resolver, APIs.AlbumApi);
  }

  export function getDefaultMainUrl(): string {
    const roundRobinManager = resolver.get<RoundRobinManager>(
      TYPES.RoundRobinManager
    );

    return roundRobinManager.getAssetsUri();
  }
}
