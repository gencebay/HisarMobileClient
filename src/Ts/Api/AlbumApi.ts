import { ApiContract } from "./";
import { AlbumCategoryResult } from "../Models/AlbumCategoryResult";

export class AlbumApi extends ApiContract {
  constructor() {
    super("main", "api/album");
  }

  list = (): Promise<AlbumCategoryResult[]> => null;

  getType = (): string => "AlbumApi";
}
