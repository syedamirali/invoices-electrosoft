import React, { Component } from 'react';
import {Col ,Card, Row} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import applyFilters from '../Redux/sortFilters';
import { nameFilter, dateFilter, sortByFilter } from "../Redux/actions";
import {addInvoicesToSate} from "../helpers/firebase";

class ListInvoices extends Component{

    constructor(props){
        super(props);
        this.props=props;
        this.props.dispatch(addInvoicesToSate());
    }



    render(){
    return(
        <Col lg={{span:8, offset:2}}>
            <Card style={{marginBottom:'40px'}}>
                <Card.Header>
                
                <Card.Title>
                    <h2>Invoices</h2>
                </Card.Title>
                <Card.Subtitle>
                    <p>List of Invoices</p>
                </Card.Subtitle>
                <Row>
                <Col lg={4}>
                    <div className="md-form" >
                        <input type="text" id="search"  className="form-control" onChange={(e)=>{
                            var name=e.target.value;
                            this.props.dispatch(nameFilter(name));
                        }} />
                        <label htmlFor="search">Search</label>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="md-form" style={{marginTop:'37px'}}>
                        <DayPickerInput placeholder="Select Date" onDayChange={(date)=>{
                            if(date!=undefined){
                            var dateFormatted=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
                            this.props.dispatch(dateFilter(dateFormatted));
                            }else{
                                this.props.dispatch(dateFilter(""))
                            }
                        }}/>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="md-form">
                        <select className="form-control" onChange={(e)=>{
                            var sort=e.target.value;
                            this.props.dispatch(sortByFilter(sort));
                        }}>
                            <option defaultValue="amount" value="amount">Amount</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </Col>
                </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                        {this.props.invoices.length?
                        <table className="table table-responsive-md table-responsive-sm table-hover" >
                            <thead className="thead-dark">
                                <tr>
                                <th>ID</th>
                                <th>Client Name</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applyFilters(this.props.invoices,this.props.filters).map((inv)=>{
                                    return (
                                        <tr key={inv.Id}>
                                            <td>{inv.Id}</td>
                                            <td>{inv.clientName}</td>
                                            <td>{inv.clientPhone}</td>
                                            <td>{inv.clientEmail}</td>
                                            <td className="text-light">
                                                <strong className="badge badge-primary" style={{fontSize:15}}>Rs .{inv.amount}</strong></td>
                                            <td>{inv.date} {inv.time}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>:
                        <h2 className="text-dark">No Invoices Yet</h2>
                        }
                        
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
}

const mapStateToProps=(state)=>{
    return state
};


export default connect(mapStateToProps)(ListInvoices);