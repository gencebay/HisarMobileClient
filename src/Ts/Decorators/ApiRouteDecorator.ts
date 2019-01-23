import { ApiContract } from "../Api";

export function apiRoute(routeTemplate: string, regionKey: string) {
  if (!routeTemplate) {
    throw new Error("routeTemplate required");
  }

  if (!regionKey) {
    throw new Error("regionKey required");
  }

  return function(target: ApiContract) {
    target.routeTemplate = routeTemplate;
    target.regionKey = regionKey;
  };
}
