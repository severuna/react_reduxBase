import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Add from './pages/AddPost/Add';
import NavBar from './components/NavBar/NavBar';

const Main = () => {
    return (
        <div className='main row'>
            <NavBar />
            <Routes>
                <Route path='/react_reduxBase' element={<Home />}/>
                <Route path='/react_reduxBase/add-post' element={<Add />} />
            </Routes>
        </div>
    );
};

export default Main;