import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const AUTHOR_LIST = useSelector((state) => state);
    console.log({AUTHOR_LIST});
    
    return (
        <div className='content column'>
            <h1 className='title'>Home (show posts)</h1>
            <Link to={`/react_reduxBase/add-post`} className='title'>Go to Add</Link>
        </div>
    );
};

export default Home;