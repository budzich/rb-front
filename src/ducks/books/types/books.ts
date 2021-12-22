export const LATEST_BOOKS_TYPE = 'latest';
export const OLDEST_BOOKS_TYPE = 'oldest';

export type SortType = typeof LATEST_BOOKS_TYPE | typeof OLDEST_BOOKS_TYPE;

export interface IGenre {
  id: number;
  title: string;
}

export interface IBook {
  id: number;
  title: string;
  description: string;
  image: string;
  genres: IGenre[];
}

export interface IPopularBook {
  views: number;
  book: IBook;
}

export interface IGetBooks {
  page?: number;
  sort?: SortType;
}
