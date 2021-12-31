import fixreducer from './Reducer/RootReducer'
import { createStore } from 'redux'

const store = createStore(fixreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;