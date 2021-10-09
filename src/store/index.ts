import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'

import counterRootSaga from './sagas/counter'

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(counterRootSaga)

export default Store
