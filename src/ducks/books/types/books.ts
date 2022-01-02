import { IGenre } from 'ducks/genres/types/genres';

export const LATEST_BOOKS_TYPE = 'latest';
export const OLDEST_BOOKS_TYPE = 'oldest';

export type SortType = typeof LATEST_BOOKS_TYPE | typeof OLDEST_BOOKS_TYPE;

export interface IAuthor {
  email: string;
  id: number;
}

export interface IBook {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date | string;
  genres?: IGenre[];
  user?: IAuthor;
}

export interface IPopularBook {
  views: number;
  book: IBook;
}

export interface IGetBooks {
  page?: number;
  sort?: SortType;
}

export interface ISearchBooks {
  search: string;
}
