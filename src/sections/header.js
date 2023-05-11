import * as React from "react";
import { Link } from "gatsby";
import { VscMenu } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';

import Nav from '../components/nav';
import '../styles/header.css';

const Header = ({ toggleMailForm, toggleSideNav }) => {
  return (
    <header className='header'>
      <div className='header__contents'>
        <div className='header__menu'>
          <div className='header__menu-container'>
            <VscMenu className='header__menu-container_icon' color='#FAF9F6' onClick={toggleSideNav} />
          </div>
        </div>

        <div className='header__ascent'>
          {/* <Link to='/'> */}
            <h1>ASCENT LION DANCE</h1>
          {/* </Link> */}
        </div>

        <div className='header__nav'>
          <Nav />
        </div>

        <div className='header__mail'>
          <FiMail className='header__mail-icon' color='#FAF9F6' onClick={toggleMailForm} />
        </div>
      </div>
    </header>
  )
}

export default Header
