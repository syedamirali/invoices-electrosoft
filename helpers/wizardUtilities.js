import React from 'react';
import General from '../components/Forms/general';
import Product from '../components/Forms/products';
import Tax from '../components/Forms/taxes';
import {handleLongStatements,handleNote,formatter} from '../helpers/helpers';
import INV1 from '../invoices/inv1';

function handleChange(e){
    var obj=e.target.name;
    var value=e.target.value;
    this.setState((prevState)=>{
        return {
            wizardData:{...prevState.wizardData,
                ...{[obj]:value}
            }
        }
    })
};



function handleForm(value){
    switch(value){
        case 1:
            return <General 
            values={this.state.wizardData}
            validator={this.validator} 
            handleChange={this.handleChange} 
            handleDateChange={this.handleDateChange} />
        case 2:
            return <Product 
            products={this.state.wizardData.products} 
            values={this.state.demo} 
            validator={this.validator}
            addProduct={this.addProduct} 
            handleChange={this.handleProductChange} />
        case 3:
            return <Tax 
            values={this.state.wizardData}
            validator={this.validator} 
            handleChange={this.handleChange} />
    }
}

function handleDateChange(date){
    var Time=new Date();
    this.setState((prevState)=>{
        var DateString=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        var TimeString=`${Time.getHours()}:${Time.getMinutes()}:${Time.getSeconds()}`;
        return{
            wizardData:{...prevState.wizardData,date:DateString,time:TimeString}
        }
    })
}


function handleProductChange(e){
    var obj=e.target.name;
    var value=e.target.value;
    this.setState((prevState)=>{
        return{
         demo:{...prevState.demo,[obj]:value}   
        }
    })
}

function handlePrint(){
        
    var data=[];
    this.state.wizardData.products.forEach((product)=>{
        var total=product.unitRate*product.hour*product.quantity;
        var item=[product.name,'Rs. '+product.unitRate,product.hour,product.quantity,total];
        data.push(item);
    });

    this.setState((prevState)=>{
        return{
            progress:prevState.progress+34,
            finish:!prevState.finish
        }
    });
    
    

    setTimeout(()=>{
        var note=this.state.wizardData.note==''?"There is no note. ":this.state.wizardData.note;
        var balance=this.state.wizardData.balance==''?0:parseInt(this.state.wizardData.balance);
        var tax=this.state.wizardData.taxRate==''?0:parseInt(this.state.wizardData.taxRate);
        INV1({handleLongStatements:handleLongStatements,handleNote:handleNote,formatter:formatter,products:data,balance:balance,tax:tax,
        clientName:this.state.wizardData.billTo,clientAddress:this.state.wizardData.address,date:this.state.wizardData.date,
        products:data,
        note:note});
        this.setState({
            ...this.defaultState
        });
    },3000);
    
    this.validator.hideMessageFor("email");
    this.validator.hideMessageFor("phone");
    this.validator.hideMessageFor("address");
    this.validator.hideMessageFor("billto");
    this.validator.hideMessageFor("date");
    this.validator.hideMessageFor("products");
}


function addProduct(){
    var name = this.state.demo.name;
    var rate = this.state.demo.unitRate;
    var quan = this.state.demo.quantity;
    var hour = this.state.demo.hour;
    var validation= !this.validator.fieldValid("product_name")||
                    !this.validator.fieldValid("unitRate") ||
                    !this.validator.fieldValid("hour") ||
                    !this.validator.fieldValid("quantity"); 
    if(validation){
        this.validator.showMessageFor("product_name");
        this.validator.showMessageFor("unitRate");
        this.validator.showMessageFor("hour");
        this.validator.showMessageFor("quantity");
        this.forceUpdate();
    }else{
        var product={name:name,unitRate:rate,quantity:quan,hour:hour};
        this.validator.hideMessageFor("product_name");
        this.validator.hideMessageFor("unitRate");
        this.validator.hideMessageFor("hour");
        this.validator.hideMessageFor("quantity");
        this.setState((prevState)=>{
            return{
                wizardData:
                    {...prevState.wizardData,products:[...prevState.wizardData.products,product]},
                demo:{
                    name:'',
                    quantity:'',
                    unitRate:'',
                    hour:''
                }
            }
        });
    }
}


export {handleChange,handleForm,handleDateChange,handleProductChange,handlePrint,addProduct};