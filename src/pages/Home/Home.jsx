import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import Post from '../../components/Post';

const Home = () => {

    const AUTHOR_LIST = useSelector((state) => state);
    console.log({AUTHOR_LIST});

    const obj = {
        name: 'Draco Malfoy',
        nickname: 'best',
        date: '09.10.2022',
        content: 'You`re not dangerous at all, are you, you great ugly brute!',
        avatar: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/draco-malfoy-from-harry-potter-watercolor-portrait-design-turnpike.jpg',
        media: 'https://f.vividscreen.info/soft/7fe06adc5f4d516932fb6d19adbd5166/Cute-Kitty-Art-wide-i.jpg',
        like: 451,
        comments: 561,
        retweet: 501
    }
    
    return (
        <div className='content column'>
            <h1 className='title'>Home (show posts)</h1>
            <Post {...obj}/>
        </div>
    );
};

export default Home;