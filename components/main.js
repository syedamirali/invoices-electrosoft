import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Invoices from './list';
import Create from './wizard';
import Nav from './nav';
import Footer from './footer';
import NotFound from './notFound';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    

    

    render(){
        return(
            <Container fluid={true} >
                    <BrowserRouter>
                        <Row >
                            <Col style={{padding:'0px'}}>
                                <Nav />
                            </Col>
                        </Row>
                        <Row style={{paddingTop:'20px',paddingBottom:'50px'}}>
                            <Switch>
                                <Route path="/" exact={true} component={Invoices} />
                                <Route path="/create" exact={true} component={Create} />
                                <Route component={NotFound} />
                            </Switch>
                        </Row>
                        <Row>
                            <Col style={{padding:'0px',position:'fixed',bottom:'0px'}}>
                                <Footer />
                            </Col>
                        </Row>
                    </BrowserRouter>
            </Container>
        )
    }
}

export default Main;