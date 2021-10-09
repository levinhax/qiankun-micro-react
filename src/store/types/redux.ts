export interface ActionType<T = string, P = any, R = any> {
  type: T
  payload?: P
  resolve?: R
}
