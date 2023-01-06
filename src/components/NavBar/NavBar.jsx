import React from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { FaCameraRetro } from 'react-icons/fa';
import Logo from '../../asset/logoGA.png'
import './navbar.css'


const NavBar = () => {
    const navigate = useNavigate();
  return (
    <nav className='navbar'>
        <div className='logo-navbar-section'>
            <h2>Memoirs</h2>
            <Link to='/'>
                <img className='logo' src={Logo} alt='logo' />
            </Link>
        </div>
        <div className='add-new-picture-btn'>
            <button className='add-new-btn' onClick={() => navigate('/add')}>
            <span className='camera-icon'><FaCameraRetro /></span> Add a new Picture
            </button>
        </div>
    </nav>
  )
}

export default NavBar
