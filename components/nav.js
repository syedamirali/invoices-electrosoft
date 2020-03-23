import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const nav=()=>{
return(
<Navbar className="special-color-dark" variant="dark"  >
    <Navbar.Brand href="http://www.electrosofttechnologies.com/" target="_blank">ELECTROSOFT</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Invoices List</Link>
      <Link to="/create" className="nav-link">Create Invoice</Link>
    </Nav>
    
  </Navbar>
  );
};
 export default nav;