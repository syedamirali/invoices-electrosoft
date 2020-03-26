import {invoices, filters} from './reducers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var store=createStore(combineReducers({
    invoices:invoices,
    filters:filters
}),applyMiddleware(thunk));

export default store;