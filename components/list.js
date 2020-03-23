import React from 'react';
import {Col ,Card, Row} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
const ListInvoices=(props)=>{
    return(
        <Col lg={{span:8, offset:2}}>
            <Card>
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
                        <input type="text" id="search"  className="form-control" />
                        <label htmlFor="search">Search</label>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="md-form" style={{marginTop:'37px'}}>
                        <DayPickerInput placeholder="Select Date"/>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="md-form">
                        <select className="form-control">
                            <option>Amount</option>
                            <option>Date</option>
                        </select>
                    </div>
                </Col>
                </Row>
                </Card.Header>
                <Card.Body>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                            <th>ID</th>
                            <th>Client Name</th>
                            <th>Phone No.</th>
                            <th>Amount</th>
                            <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>43543dsf435rs45</td>
                                <td>Syed Aamir Ali</td>
                                <td>+92 304 5094429</td>
                                <td className="text-dark"><strong>Rs .{5550}</strong></td>
                                <td>30-12-2012::10:56:90</td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListInvoices;