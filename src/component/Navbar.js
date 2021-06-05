import React from 'react';
import {Navbar, Nav} from "react-bootstrap"

const Navigation = () => {
return (
<>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Sasya Tutorials</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/add">Add Tutorials</Nav.Link>
      <Nav.Link href="/update">Upadte Tutorials</Nav.Link>
      <Nav.Link href="/delete">Delete Tutorials</Nav.Link>
    </Nav>
    
  </Navbar>
</>

);

}

export default Navigation