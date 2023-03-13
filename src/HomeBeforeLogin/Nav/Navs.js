import React from 'react';
import './Nav.css'
import { Navbar ,Container ,Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import PopUp from '../../LoginSignupPopUp/LoginSignupPopUp';
import {Link as ScrollLink} from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const Navs =()=>{
    return(
        <Navbar  style={{direction:'rtl'}} expand="lg" className="navOfIndex">
        <Container>
          
          <ScrollLink to="home" spy={true} smooth={true} id="logo"  offset={-70} duration={400}>
            <img className='img' src={logo}  title="logo"/>
            الأكيلة
          </ScrollLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
           
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={400} className='link me-3'>الصفحة الرئيسية </ScrollLink>
            <ScrollLink to="list" spy={true} smooth={true} offset={-70} duration={400} className='link me-3'>قائمة الطعام</ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={-50} duration={400} className='link me-3'>عملاؤنا</ScrollLink>
            <ScrollLink to="app" spy={true} smooth={true} offset={30} duration={400} className='link me-3'>التطبيق</ScrollLink>
            {/* <RouterLink to={`/SignPage`} className='link me-3'><PopUp/></RouterLink> */}
             <PopUp className="Icon"/>  
          
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}
export default Navs;