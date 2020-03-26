const addInvoice=(invoiceInfo={})=>({
    type:'addInvoice',
    invoiceInfo:invoiceInfo
});

const nameFilter=(name="")=>({
    type:'name',
    name:name
});

const dateFilter=(date="")=>({
    type:'date',
    date:date
});

const sortByFilter=(sortBy="")=>({
    type:"sortBy",
    sortBy:sortBy
});

const removeAll=()=>({
    type:'removeAll'
});

const getID=(id)=>({
    type:"GET_ID",
    id:id
});

export {addInvoice, nameFilter, dateFilter, sortByFilter, removeAll, getID}