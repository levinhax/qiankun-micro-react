import { take, put, call, race, cancelled, ActionPattern, fork } from 'redux-saga/effects'
import { eventChannel, END, EventChannel } from 'redux-saga'
import { addAction, setCountdownAction } from '../actions/counter'
import { INCREMENT_ASYNC, CANCEL_INCREMENT_ASYNC } from '../constants/counter'

export const countdown = (seconds: number): EventChannel<ActionPattern> => {
  console.log('countdown', seconds)
  return eventChannel(listener => {
    const iv = setInterval(() => {
      seconds -= 1
      console.log('countdown', seconds)
      if (seconds > 0) listener(seconds)
      else {
        listener(END)
        clearInterval(iv)
        console.log('countdown terminated')
      }
    }, 1000)
    return () => {
      clearInterval(iv)
      console.log('countdown cancelled')
    }
  })
}

export function* incrementAsync(action: any) {
  const chan: ActionPattern = yield call(countdown, action?.payload)
  try {
    while (true) {
      let s: number = yield take(chan)
      yield put(setCountdownAction(s))
    }
  } finally {
    const isCancelled: boolean = yield cancelled()
    if (!isCancelled) {
      yield put(addAction())
      yield put(setCountdownAction(0))
    }
  }
}

export function* watchIncrementAsync() {
  try {
    while (true) {
      const action: ActionPattern = yield take(INCREMENT_ASYNC)
      yield race([call(incrementAsync, action), take(CANCEL_INCREMENT_ASYNC)])
    }
  } finally {
    console.log('watchIncrementAsync terminated')
  }
}
export default function* rootSaga() {
  yield fork(watchIncrementAsync)
}
