import React from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import UseAnimations from 'react-useanimations';
import {Link} from 'react-router-dom';

const NotFound=(props)=>{
    return(
        <Container fluid={true}>
        <Row>
            <Col lg={{span:6, offset:3}}>
            <Card style={{padding:'25px'}} className="special-color-dark text-warning">
                        <center>
                        <UseAnimations
                        animationKey="activity"
                        className="text-center text-warning"
                        size={200}
                    />
                    <h1 style={{fontSize:200,color:"#ffffff"}}><strong>404</strong></h1>
                        <h5 className="text-warning" style={{width:'80%',fontSize:25}}> <strong>The resource you are looking for is not available at current time, please try later.</strong></h5>
                        <Link className="btn btn-warning text-dark" to="/">Back to Home</Link>
                    </center>
            </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default NotFound;