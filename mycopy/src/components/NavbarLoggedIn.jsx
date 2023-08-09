import React from 'react'
import navlogo from '../assets/Asset 9@4x.png';
import '../components-css/Header.css'
import { Link } from 'react-router-dom';

function NavbarLoggedIn() {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navlogo-container'>
                    <img src={navlogo} alt="" />
                </Link>
                <div className='nav-link'>
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">Contact</a>
                    <a href="">About us</a>
                </div>
            </nav>
        </>
    )
}

export default NavbarLoggedIn
