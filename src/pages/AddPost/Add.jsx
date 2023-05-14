import React from 'react';
import './Add.css';
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className='content column'>
            <h1 className='title'>Add post</h1>
            <Link to={`/react_reduxBase/`} className='title'>Go to Home</Link>
        </div>
    );
};

export default Add;