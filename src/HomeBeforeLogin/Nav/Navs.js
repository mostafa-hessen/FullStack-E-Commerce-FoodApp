import React from 'react';
import './Nav.css'
import { Navbar ,Container ,Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'
const Navs =()=>{
    return(
        <Navbar  style={{direction:'rtl'}} expand="lg">
        <Container>
          <Navbar.Brand id="logo"   href="#home">
            <img className='img' src={logo}  title="logo"/>
            الأكيلة
 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
           
             
              

            <Nav.Link href="#home" >الصفحة الرئيسية </Nav.Link>
            <Nav.Link href="#link">قائمة الطعام</Nav.Link>
            <Nav.Link href="#link" >نبذه</Nav.Link>
          

           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

    )
}
export default Navs;