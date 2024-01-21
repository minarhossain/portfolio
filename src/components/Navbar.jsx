import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { LuMessageSquare } from "react-icons/lu";


const Navbar = () => {
    return (
        <div className="navbar">
            <img className='logo' src={logo} alt="logo" />
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItems">Home </Link>
                <Link to="/client" className="desktopMenuListItems">Client</Link>
                <Link to="/about" className="desktopMenuListItems">About</Link>
                <Link to="/portfolio" className="desktopMenuListItems">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn">
                <LuMessageSquare className='icon' />

                Contact Me

            </button>
        </div>
    );
};

export default Navbar;