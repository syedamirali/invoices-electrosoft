import React from 'react';
import UseAnimations from "react-useanimations";
import {Card} from "react-bootstrap";
const thankYou=(props)=>(
        <Card style={{paddingTop:'20px',paddingBottom:'20px'}}>
                    <center>
                    <UseAnimations
                    animationKey="infinity"
                    className="text-center text-primary"
                    size={186}
                  />
                  <h5>{props.message}</h5>
                  </center>
        </Card>
)

export default thankYou;