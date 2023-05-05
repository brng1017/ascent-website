import * as React from "react";
import { Link } from "gatsby";
import { VscMenu } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';

import Nav from '../components/nav';
import '../styles/header.css';

const Header = ({ toggleMailForm }) => {
  return (
    <header className='header'>
      <div className='header__contents'>
        <div className='header__menu'>
          <div className='header__menu-container'>
            <VscMenu color='#FAF9F6' size={25} />
          </div>
        </div>

        <div className='header__ascent'>
          <Link to='/'>
            <h1>ASCENT LION DANCE</h1>
          </Link>
        </div>

        <div className='header__nav'>
          <Nav />
        </div>

        <div className='header__mail'>
          <FiMail color='#FAF9F6' size={25} onClick={toggleMailForm} />
        </div>
      </div>
    </header>
  )
}

export default Header
