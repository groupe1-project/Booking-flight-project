import {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './component/reducers';
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;