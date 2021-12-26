export const LATEST_BOOKS_TYPE = 'latest';
export const OLDEST_BOOKS_TYPE = 'oldest';

export type SortType = typeof LATEST_BOOKS_TYPE | typeof OLDEST_BOOKS_TYPE;

export interface IGenre {
  id: number;
  title: string;
}

export interface IGenresResponse {
  data: IGenre[];
}
