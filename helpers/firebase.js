import firebase from '../firebase/connection';
import {addInvoice, removeAll, starting, ending} from '../Redux/actions';

const addInvoicesToSate=()=>{
    return (dispatch)=>{
        dispatch(starting());
        firebase.database().ref("invoices").once("value")
        .then((snapshot)=>{
            dispatch(removeAll());
            snapshot.forEach((item)=>{
                dispatch(addInvoice({...item.val(),Id:item.key}));
            });
            dispatch(ending());
        }).catch((error)=>{
            console.log(error);
        })
    }
};

const addInvoiceToFirebase=(invoiceData={})=>{
    return (dispatch)=>{
        firebase.database().ref("invoices").push(invoiceData)
        .then((snapshot)=>{
            console.log("SuccessFully Added");
        }).catch((error)=>{
            console.log(error);
        });
    }
}

const getId=()=>{
    var key="";
    firebase.database().ref("invoices").on("child_added",(snapshot)=>{
        key=snapshot.key;
    });
    return key;
}

export {addInvoicesToSate, addInvoiceToFirebase, getId};