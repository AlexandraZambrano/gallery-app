import React from 'react'
import {Menu, Container, Button} from 'semantic-ui-react';
import {useNavigate, Link} from 'react-router-dom';
import { FaCameraRetro } from 'react-icons/fa';
import Logo from '../../asset/logoGA.png'
import './navbar.css'


const NavBar = () => {
    const navigate = useNavigate();
  return (
    //   <Menu 
    //     inverted 
    //     borderless 
    //     style={{marginBottom: '20px', backgroundColor:'#adb9e3'}} 
    //     attached 
    //     >
    <nav className='navbar'>
        {/* <Container> */}

        {/* <Menu.Item> */}
        <div className='logo-navbar-section'>
            <h2>Memoirs</h2>
        {/* </Menu.Item> */}

        {/* <Menu.Item name='home'> */}
            <Link to='/'>
                <img className='logo' src={Logo} alt='logo' />
            </Link>
        </div>
        {/* </Menu.Item> */}

        {/* <Menu.Item position='right'> */}
        <div className='add-new-picture-btn'>
            <button className='add-new-btn' onClick={() => navigate('/add')}>
            <span className='camera-icon'><FaCameraRetro /></span> Add a new Picture
            </button>
        </div>
        {/* </Menu.Item> */}

        {/* </Container> */}
    {/* </Menu> */}

    </nav>
  )
}

export default NavBar
