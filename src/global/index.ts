export interface Gif {
  id: number;
  title: string;
  url: string;
}

export interface GifState {
  gifs: Array<Gif>;
  isLoading: boolean;
}