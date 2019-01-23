export class ApiContract {
  regionKey: string;
  routeTemplate: string;
  getType = (): string => "ApiContract";

  constructor(regionKey: string, routeTemplate: string) {
    this.regionKey = regionKey;
    this.routeTemplate = routeTemplate;
  }
}
