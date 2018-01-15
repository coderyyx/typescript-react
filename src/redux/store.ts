import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
/**
 * merge to Reducers
 */
import * as indexReducer from '../redux/reducres/reducer';
import thunk from 'redux-thunk';
import {Tool} from '../config/tool';

type dataShape = object | Array<any>;

interface storeState{
    type:string;
    path?:string;
    data:dataShape
}
 /**
  * combine application Reducers to a Big Reducer
    support many reducers mapping different reducer files
  */
const reducers=Tool.redux.combineReducer(indexReducer);

var store = createStore<storeState>(
    combineReducers(reducers),
    compose(applyMiddleware(thunk))
);

export default store;
