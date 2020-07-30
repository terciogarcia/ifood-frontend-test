export interface ReduxAction<T> {
  type: T;
  payload?: any;
}
