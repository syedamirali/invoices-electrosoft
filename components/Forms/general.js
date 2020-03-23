import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Col, Row } from 'react-bootstrap';

const General=(props)=>{
    return(
        <Row>
                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="text" id="email" className="form-control" name="email" 
                                            value={props.values.email} 
                                            onChange={props.handleChange}
                                            />
                                            <label htmlFor="email">E-mail</label>
                                        </div>
                                        <span className="text-danger">
                                        {props.validator.message("email",props.values.email,"required|email")}
                                        </span>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="text" id="phone" className="form-control" name="phone" 
                                            value={props.values.phone} onChange={props.handleChange}
                                            />
                                            <label htmlFor="phone">Phone-No.</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("phone",props.values.phone,"required|phone")}
                                        </span>
                                    </Col>

                                    <Col lg={12}>
                                        <div className="md-form">
                                            <textarea id="address" className="md-textarea form-control" name="address" 
                                            value={props.values.address} onChange={props.handleChange}
                                            ></textarea>
                                            <label htmlFor="address">Address</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("address",props.values.address,"required|min:8")}
                                        </span>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="text" id="bill" className="form-control" name="billTo"
                                            value={props.values.billTo}
                                            onChange={props.handleChange}
                                            />
                                            <label htmlFor="bill">Bill To</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("billto",props.values.billTo,"required|min:4")}
                                        </span>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="md-form">
                                            <DayPickerInput style={{marginTop:'14px'}} 
                                            placeholder="Select Date"
                                            value={props.values.date}
                                            onDayChange={props.handleDateChange}
                                            name="date" />
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("date",props.values.date,"required|min:4")}
                                        </span>
                                        
                                    </Col>

                                   

                                </Row>
    )
}

export default General