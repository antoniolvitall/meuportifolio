import React from 'react'
import Logo from './allogo.png';

const NavBar = () => {
  return (
    <nav class="navbar navbar-nav fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
            <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="AL logo"/>
            Antonio Lindo
        </a>
    </nav>
  )
}

export default NavBar