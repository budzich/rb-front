export const LATEST_BOOKS_TYPE = 'latest';
export const OLDEST_BOOKS_TYPE = 'oldest';

export type SortType = typeof LATEST_BOOKS_TYPE | typeof OLDEST_BOOKS_TYPE;

export interface IGenre {
  id: number;
  title: string;
}

export interface IAuthor {
  email: string;
  id: number;
}

export interface IBook {
  id: number;
  title: string;
  description: string;
  image: string;
  genres: IGenre[];
  createdAt: Date;
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
