import React from 'react'
import navlogo from '../assets/Asset 9@4x.png';
import '../components-css/Header.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navlogo-container'>
                    <img src={navlogo} alt="" />
                </Link>
                <div className='nav-link'>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
