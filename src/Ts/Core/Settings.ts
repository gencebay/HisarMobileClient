import { injectable } from "inversify";

// declare var __DEV__: boolean;

export interface Settings {
  app: string;
  project: string;
  apiRegionKeys: {
    main: string;
    authorization: string;
  };
}

@injectable()
export class DefaultSettings implements Settings {
  app: string;
  project: string;
  apiRegionKeys: {
    main: string;
    authorization: string;
  };

  constructor() {
    this.app = "My Radio";
    this.project = "My Radio App (Development)";

    this.apiRegionKeys = {
      main: "http://localhost:5003/",
      authorization: "http://localhost:5003/"
    };
  }
}
