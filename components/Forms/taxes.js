import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Tax=(props)=>{
    return(
        <Row>
            <Col lg={6}>
                <div className="md-form">
                    <input type="number" id="taxRate" value={props.values.taxRate} onChange={props.handleChange} name="taxRate" className="form-control" />
                    <label htmlFor="taxRate">Tax Rate(Optional)</label>
                </div>
                <span className="text-danger">
                    {props.validator.message("taxRate",props.values.taxRate,"numeric")}
                </span>
            </Col>
            <Col lg={6}>
                <div className="md-form">
                    <input type="number" id="balance" 
                    value={props.values.balance}
                    onChange={props.handleChange}
                    className="form-control" name="balance" />
                    <label htmlFor="balance">Balance(Optional)</label>
                </div>
                <span className="text-danger">
                    {props.validator.message("balance",props.values.balance,"numeric")}
                </span>
            </Col>
            <Col lg={12}>
                                        <div className="md-form">
                                            <textarea id="note" className="md-textarea form-control" name="note" 
                                            value={props.values.note} onChange={props.handleChange}
                                            ></textarea>
                                            <label htmlFor="note">Note (Optional)</label>
                                        </div>
                                    </Col>
        </Row>
    )
}

export default Tax;