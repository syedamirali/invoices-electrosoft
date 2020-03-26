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


const starting=()=>({
    type:"START"
});

const ending=()=>({
    type:"END"
})

export {addInvoice, nameFilter, dateFilter, sortByFilter, removeAll, starting, ending}