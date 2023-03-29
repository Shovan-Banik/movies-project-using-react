import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-left'>
                <h3>Movies Hunter</h3>
            </div>
            <div className='nav-right'>
                <a>Home</a>
                <a>Blog</a>
                <a>About us</a>
                <a>Contact us</a>
            </div>
        </nav>
    );
};

export default Header;