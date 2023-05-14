import React, { useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);

    return (
        <nav className='header row'>
            <Link to={`/react_reduxBase/`} className='header-item'>Posts</Link>
            <Link to={`/react_reduxBase/add-post`} className='header-item'>Add post</Link>
        </nav>
    );
};

export default NavBar;