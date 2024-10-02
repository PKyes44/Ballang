export type Response<T> = {
  success: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: null | any;
  result: T;
};
