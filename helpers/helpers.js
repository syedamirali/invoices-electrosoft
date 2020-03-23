var handleLongStatements=(address)=>{
    var wordsArray=address.split(" ");
    address="";
    for(var i=0;i<wordsArray.length;i++){
        if(i%4==0){
            address+="\n";
        }
        address+=wordsArray[i]+" ";
    };
    return address;
};

var handleNote=(statement)=>{
    var wordsArray=statement.split(" ");
    statement="";
    for(var i=0;i<wordsArray.length;i++){
        if(i%9==0){
            statement+="\n";
        }
        statement+=wordsArray[i]+" ";
    };
    return statement;
};

var formatter=(amount)=>{
    var formatter=new Intl.NumberFormat("PK-SD",{style:"currency",currency:'PKR'});
    return formatter.format(amount);
};


function checkValidationForEachStep(step,obj){
    var forStep1=!obj.validator.fieldValid("email") ||
                 !obj.validator.fieldValid("phone") ||
                 !obj.validator.fieldValid("address")||
                 !obj.validator.fieldValid("billto")||
                 !obj.validator.fieldValid("date");
    if(step==1 && forStep1)
    {
        obj.validator.showMessageFor("email");
        obj.validator.showMessageFor("phone");
        obj.validator.showMessageFor("address");
        obj.validator.showMessageFor("billto");
        obj.validator.showMessageFor("date");
        obj.forceUpdate();
        return false;
    }
    var forStep2= !obj.validator.fieldValid("products");
    if(step==2&&forStep2){
        obj.validator.showMessageFor("products");
        obj.forceUpdate();
        return false;
    }
    return true;
}

export {checkValidationForEachStep,handleLongStatements,handleNote,formatter}