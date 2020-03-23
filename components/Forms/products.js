import React from 'react';
import { Row,Col, Button } from 'react-bootstrap';

const Products=(props)=>{
    return(
        <Row>
        
                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="text" id="name" className="form-control" name="name"
                                            value={props.values.name} onChange={props.handleChange}
                                            />
                                            <label htmlFor="name">Product Name</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("product_name",props.values.name,"required|min:4")}
                                        </span>
                                    </Col>



                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="number" id="unitRate" className="form-control" name="unitRate"
                                            value={props.values.unitRate} onChange={props.handleChange}
                                            />
                                            <label htmlFor="unitRate">Unit Rate</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("unitRate",props.values.unitRate,"required|numeric")}
                                        </span>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="number" id="quantity" className="form-control" name="quantity"
                                            value={props.values.quantity}
                                            onChange={props.handleChange} />
                                            <label htmlFor="quantity">Quantity</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("quantity",props.values.quantity,"required|numeric")}
                                        </span>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="md-form">
                                            <input type="text" id="hour" className="form-control" name="hour" 
                                            value={props.values.hour}
                                            onChange={props.handleChange} />
                                            <label htmlFor="hour">Hours</label>
                                        </div>
                                        <span className="text-danger">
                                            {props.validator.message("hour",props.values.hour,"required|numeric")}
                                        </span>
                                    </Col>

                                    <Col lg={12}>
                                    <Button block={true} onClick={props.addProduct}>Add Products</Button>
                                    </Col>
           
                <Col lg={12} style={{padding:'10px'}}>
                    {props.products.length?
                    <table className="table table-stripped">
                        <thead className="thead-dark">
                            <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Rate</th>
                            <th>No of Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.products.map((product)=>{
                                return(
                                    <tr key={product.name}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.unitRate}</td>
                                        <td>{product.hour}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>:<span></span>}
                    <span className="text-danger">
                    {props.validator.message("products",props.products,"required|array|max:10")}
                    </span>
                </Col>
           

        </Row>
        
    )
}

export default Products;