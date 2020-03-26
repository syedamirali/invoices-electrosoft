import {invoices, filters, isLoaded} from './reducers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var store=createStore(combineReducers({
    invoices:invoices,
    filters:filters,
    loaded:isLoaded
}),applyMiddleware(thunk));

export default store;