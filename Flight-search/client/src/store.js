import {createStore,applyMiddleware} from 'readux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './component/reducers';
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;