export interface PlaylistImage {
  height?: number;
  width?: number;
  url: string;
}
export interface Playlist {
  colaborative: boolean,
  description: string,
  id: string,
  images: PlaylistImage[],
  name: string,
  uri: string;
}
