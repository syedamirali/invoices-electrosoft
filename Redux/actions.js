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

export {addInvoice, nameFilter, dateFilter, sortByFilter}