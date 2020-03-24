import React from 'react';
import {Component} from 'react';
import { Col, Card, ProgressBar, Button } from 'react-bootstrap';
import Validator from 'simple-react-validator';
import {checkValidationForEachStep} from '../helpers/helpers';
import ThankYou from './loading';
import {handleChange,handleForm,handleDateChange,handleProductChange,addProduct,handlePrint} from '../helpers/wizardUtilities';
import {addInvoice} from '../Redux/actions';
import {connect} from 'react-redux';
class GenerateInvoice extends Component{
    constructor(props){
        super(props);
        
        this.defaultState={
            step:1,
            demo:{
                name:'',
                quantity:'',
                unitRate:'',
                hour:''
            },
            progress:0,
            finish:false,
            wizardData:{
                email:'',
                phone:'',
                address:'',
                billTo:'',
                date:'',
                time:'',
                products:[],
                taxRate:'',
                balance:'',
                note:''
            }
        };
        this.props=props;
        this.validator=new Validator();
        this.state=this.defaultState;
        this.handleForm=handleForm.bind(this);
        this.__next=this.__next.bind(this);
        this.__prev=this.__prev.bind(this);
        this.handleChange=handleChange.bind(this);
        this.handleDateChange=handleDateChange.bind(this);
        this.handleProductChange=handleProductChange.bind(this);
        this.addProduct=addProduct.bind(this);
        this.handlePrint=handlePrint.bind(this);
    }

    

    __next(){
        if(checkValidationForEachStep(this.state.step,this)){
            this.setState((prevState)=>{
                return{
                    step:prevState.step<3 ? prevState.step+1 : prevState.step,
                    progress:prevState.progress==66?prevState.progress+34:prevState.progress+33
                }
            });
        }
    }

    __prev(){
        this.setState((prevState)=>{
            return{
                step:prevState.step>1 ? prevState.step-1 :prevState.step,
                progress:prevState.progress==100? prevState.progress-34: prevState.progress-33
            }
        });
    }

 render(){
        return(
            <Col lg={{span:6, offset:3}} md={{span:6, offset:3}} >
                
                {!this.state.finish?
                    <Card >
                    <Card.Header >
                        <Card.Title>
                            <h2>Create Invoice</h2>
                        </Card.Title>
                        <Card.Subtitle>
                            <p>Please all the fields</p>
                        </Card.Subtitle>
                    </Card.Header>
                    <div>
                        <ProgressBar variant="primary" now={this.state.progress}  style={{height:'5px',borderRadius:'0px'}}/>
                    </div>
                    <form>
                    <Card.Body>
                                {this.handleForm(this.state.step)}
                        
                     </Card.Body>
                     </form>

                     <Card.Footer>
                                    {this.state.step!==1&&<Button variant="dark" onClick={this.__prev}>Previous</Button>}
                                    {this.state.step!==3?<Button variant="dark" style={{float:'right'}} onClick={this.__next}>Next</Button>:
                                    <Button type="submit"
                                    onClick={()=>(
                                        this.handlePrint(this.props.addInvoice)
                                    )}
                                    >Create Invoice</Button>}
                                    
                    </Card.Footer>
                    </Card>:
                    <ThankYou message="Your Invoice will be downloaded soon, you will be redirected" />}

                
            </Col>       
        )
    }
}

const mapStateToprops=(state)=>{
    return state
};
const mapDispatchToProps=(dispatch)=>{
    return {
        addInvoice:(info={})=>{
            return dispatch(addInvoice(info));
        }
    }
};

export default connect(mapStateToprops,mapDispatchToProps)(GenerateInvoice);