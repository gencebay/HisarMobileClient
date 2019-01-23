export interface AlbumCategoryResult {
  category: string;
  categorySubTitle: string;
  items: Album[];
}

export interface Album {
  id: number;
  title: string;
  url: string;
  artist: string;
}
