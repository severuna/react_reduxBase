import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import Post from '../../components/Post';

const Home = () => {

    const AUTHOR_LIST = useSelector((state) => state);
    
    let posts = [];

    Object.entries(AUTHOR_LIST.authors).forEach( ([key, value]) => {

        value.forEach(element => {
            posts.push(
                <Post 
                    key={key + Math.random()}
                    name={element.name} 
                    nickname={element.nickname} 
                    avatar={element.avatar}
                    date={element.date}
                    content={element.content}
                    media={element.media}
                    like={element.like}
                    comments={element.comments}
                    retweet={element.retweet}
                />
            );
        });
    })
    
    return (
        <div className='content column'>
            {posts}
        </div>
    );
};

export default Home;