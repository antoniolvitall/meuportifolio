import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import "./header.css";
import Logo from './allogo.png';


export default function Header() {
    const [showNavCentred, setShowNavCentred] = useState(false);
  
    return (
      <MDBNavbar expand='lg' fixed='top' dark bgColor='dark'>
        <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='30'
              alt='Logo AL'
              loading='lazy'
            />
            Antonio Lindo
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavCentred(!showNavCentred)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar show={showNavCentred}>
            <MDBNavbarNav className='mr-auto navbar-nav mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Welcome
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  About
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Projects
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }