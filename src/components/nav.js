import React from 'react';
import { Link } from "gatsby";

import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><Link activeClassName='active' to='/'>HOME</Link></li>
        <li><Link activeClassName='active' to='/about'>ABOUT</Link></li>
        <li><Link activeClassName='active' to='/services'>SERVICES</Link></li>
        <li><Link activeClassName='active' to='/book'>BOOK US</Link></li>
      </ul>
    </nav>
  )
}

export default Nav