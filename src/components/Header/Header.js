import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const userSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p className='user-email'>{user?.email}</p>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <Link onClick={userSignOut}>Sign Out</Link>
                    : <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;