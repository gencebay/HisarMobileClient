import { injectable, inject } from "inversify";
import { Settings } from "../Core";
import { TYPES } from "../Types";

@injectable()
export class RoundRobinManager {
  public settings: Settings;
  public readonly regionMap: Map<string, string[]>;
  public constructor(@inject(TYPES.Settings) settings: Settings) {
    this.settings = settings;

    const regions = this.settings.apiRegionKeys;
    this.regionMap = new Map();
    Object.keys(regions).forEach(key => {
      let values = (<string>regions[key]).split(",").map(s => s.trim());
      this.regionMap.set(key, values);
    });
  }

  public roundRobinUri = (regionKey: string): string => {
    const urls = this.regionMap.get(regionKey);
    let url: string = urls.shift();
    urls.push(url);
    return url;
  };

  public getAssetsUri = (): string => {
    const urls = this.regionMap.get("main");
    let url: string = urls[0];
    return url;
  };
}
