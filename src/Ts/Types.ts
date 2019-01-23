const TYPES = {
  Settings: Symbol("Settings"),
  RestClient: Symbol("RestClient"),
  HeaderProvider: Symbol("HeaderProvider"),
  ProxyInvoker: Symbol("ProxyInvoker"),
  ProxyManager: Symbol("ProxyManager"),
  RoundRobinManager: Symbol("RoundRobinManager")
};

const APIs = {
  AuthorizeApi: "Factory<AuthorizeApi>",
  AlbumApi: "Factory<AlbumApi>"
};

const ACTIONs = {
  UserActions: Symbol("UserActions")
};

interface Dispatcher {
  type: string;
  payload?: any;
}

interface Dispatch {
  (dispatcher: Dispatcher): void;
}

export { TYPES, APIs, ACTIONs, Dispatcher, Dispatch };
