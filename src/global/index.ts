export interface Gif {
  id: number;
  title: string;
  url: string;
}

export interface GifState {
  gifs: Array<Gif>;
  isLoading: boolean;
}

export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;