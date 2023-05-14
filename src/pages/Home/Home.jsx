import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';

const Home = () => {

    const AUTHOR_LIST = useSelector((state) => state);
    console.log({AUTHOR_LIST});
    
    return (
        <div className='content column'>
            <h1 className='title'>Home (show posts)</h1>
        </div>
    );
};

export default Home;