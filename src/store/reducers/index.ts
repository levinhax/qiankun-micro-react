import { combineReducers } from 'redux'
import { CounterState } from '../types/counter'
import CounterReducer from './counter'

export interface ReducersStateMap {
  CounterReducer: CounterState
}
const reducers = combineReducers({
  CounterReducer,
})

export default reducers
