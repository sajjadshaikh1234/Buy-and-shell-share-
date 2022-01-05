import fixreducer from './Reducer/RootReducer'
// import { createStore } from 'redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(fixreducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;