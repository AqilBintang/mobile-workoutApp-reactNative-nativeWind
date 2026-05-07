/** Generic ID type */
export type ID = string;

/** ISO 8601 date string */
export type ISODateString = string;

/** Async operation state */
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  status: AsyncStatus;
  error: string | null;
}
