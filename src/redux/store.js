import { 
    createStore,
 } from 'redux';
import { 
    composeWithDevTools,
 } from 'redux-devtools-extension';
 import reducerRoot from './reducerRoot';

const composeEnhancer = composeWithDevTools();
const store = createStore(reducerRoot, composeEnhancer);

export default store;
