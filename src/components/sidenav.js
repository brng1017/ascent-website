import React from 'react';
import { Link } from 'gatsby';
import { RiCloseLine } from 'react-icons/ri';

import '../styles/sidenav.css';

const SideNav = ({ showSideNav, toggleSideNav }) => {
  return (
    <nav className={`sidenav ${showSideNav ? 'nav-open' : ''}`}>
      <ul>
        <li><Link activeClassName='active' to='/'>HOME</Link></li>
        <li><Link activeClassName='active' to='/about'>ABOUT</Link></li>
        <li><Link activeClassName='active' to='/services'>SERVICES</Link></li>
        <li><Link activeClassName='active' to='/book'>BOOK US</Link></li>
      </ul>
      <RiCloseLine className='sidenav__close' color='#9C0000' size={40} onClick={toggleSideNav} />
    </nav>
  )
};

export default SideNav;