import { INCREMENT, DECREMENT, INCREMENT_ASYNC, CANCEL_INCREMENT_ASYNC, CLEAR_COUNTDOWN } from '../constants/counter'

export const addAction = () => ({ type: INCREMENT })
export const decrementAction = () => ({ type: DECREMENT })
export const addAsyncAction = (seconds: number) => ({ type: INCREMENT_ASYNC, payload: seconds })
export const cancelAddAsyncAction = () => ({ type: CANCEL_INCREMENT_ASYNC })
export const clearCountdownAction = () => ({ type: CLEAR_COUNTDOWN })
export const setCountdownAction = (seconds: number) => ({ type: INCREMENT_ASYNC, payload: seconds })
