var filterState={
    name:'',
    date:'',
    sortBy:'amount'
}

const invoices=(state=[],action={})=>{
    switch(action.type){
        case "addInvoice":
            return [...state,action.invoiceInfo];
        case 'removeAll':
            return state=[];
        default:
            return state;
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

export{invoices, filters}