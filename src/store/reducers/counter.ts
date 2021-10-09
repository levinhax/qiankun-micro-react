import { CounterState } from '../types/counter'
import { ActionType } from '../types/redux'
import { produce } from 'immer'
import { INCREMENT, DECREMENT, CANCEL_INCREMENT_ASYNC, INCREMENT_ASYNC } from '../constants/counter'

const initalState: CounterState = {
  counter: 0,
  countdown: 0,
}

const CounterReducer = (state: CounterState = initalState, action: ActionType) => {
  return produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.counter = state.counter + 1
        break
      case DECREMENT:
        draft.counter = state.counter - 1
        break
      case CANCEL_INCREMENT_ASYNC:
        draft.countdown = 0
        break
      case INCREMENT_ASYNC:
        draft.countdown = action?.payload
    }
  })
}

export default CounterReducer
