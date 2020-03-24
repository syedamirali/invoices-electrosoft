import {createStore,combineReducers} from 'redux';

var demoStateObject={
    Id:'sdss34v32vhv',
    clientName:"Syed Aamir Ali",
    clientPhone:"0304-5094429",
    clientEmail:"allisyedamir2018@gmail.com",
    amount:"45090",
    date:"2001-1-23",
    time:"11:09:23"
};

var demoStateObject2={
    Id:'sfgdfdss34v32vhv',
    clientName:"Syed Faizan Ali",
    clientPhone:"0304-5094429",
    clientEmail:"allisyedamir2018@gmail.com",
    amount:"565490",
    date:"2000-2-23",
    time:"11:09:23"
};

var filterState={
    name:'',
    date:'',
    sortBy:'amount'
}

const invoices=(state=[],action={})=>{
    switch(action.type){
        case "addInvoice":
            return [...state,action.invoiceInfo]
        default:
            return state
    }
};

const filters=(state=filterState,action={})=>{
    switch(action.type){
        case "name":
            return {...state,name:action.name};
        case "date":
            return {...state,date:action.date};
        case "sortBy":
            return {...state,sortBy:action.sortBy};
        default:
            return state;
    }
};


var store=createStore(combineReducers({
    invoices:invoices,
    filters:filters
}));

const filterInvoices=(invoices=[],filters={})=>{
    return invoices.filter((inv)=>{
            var nameCond=filters.name.trim()!=""?inv.clientName.toLowerCase().includes(filters.name.toLowerCase()):true;
            var dateCond=filters.date.trim()!=""?inv.date.includes(filters.date.trim()):true;
            return nameCond&&dateCond;
    }).sort((a,b)=>{
        if(filters.sortBy==="amount" && parseInt(a.amount) > parseInt(b.amount)){
            return -1;
        }
        return 0;
    }).sort((a,b)=>{
        if(filters.sortBy==="date" && (new Date(a.date) > new Date(b.date))){
            return -1;
        }
        return 0;
    });
}

var unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type:'addInvoice',
    invoiceInfo:demoStateObject
});

unsubscribe();
store.dispatch({
    type:'addInvoice',
    invoiceInfo:demoStateObject2
});

store.dispatch({
    type:"sortBy",
    sortBy:"date"
});

console.log("Not : ",store.getState());

console.log(filterInvoices(store.getState().invoices,store.getState().filters));