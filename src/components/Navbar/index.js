import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar"> 
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <span>Steffen's Portfølje</span>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;