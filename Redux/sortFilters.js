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
};

export default filterInvoices;