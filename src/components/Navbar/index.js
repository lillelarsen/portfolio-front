import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/portf-logo.png';

function Navbar()  {
        return (
            <>
            <nav className="navbar"> 
            <Link to="/">
                <img className="logo" src={logo} alt="Beach resort" />
            </Link>
                    <ul className="navbar-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
            </nav>
            </>
        )
}

export default Navbar;