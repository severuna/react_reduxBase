import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Add from './AddPost/Add';

const Main = () => {
    return (
        <div className='main row'>
            <Routes>
                <Route path='/react_reduxBase' element={<Home />}/>
                <Route path='/react_reduxBase/add-post' element={<Add />} />
            </Routes>
        </div>
    );
};

export default Main;