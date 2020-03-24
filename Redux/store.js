import {invoices, filters} from './reducers';
import {createStore, combineReducers} from 'redux';

var store=createStore(combineReducers({
    invoices:invoices,
    filters:filters
}));

export default store;