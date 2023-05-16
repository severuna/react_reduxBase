import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import Post from '../../components/Post';

const Home = () => {

    const AUTHOR_LIST = useSelector((state) => state);
    
    let posts = [];

    Object.entries(AUTHOR_LIST.authors).forEach( ([key, value]) => {
        console.log(key, value);
        posts.push(<Post 
                        key={key + Math.random()}
                        name={value.name} 
                        nickname={value.nickname} 
                        avatar={value.avatar}
                        date={value.date}
                        content={value.content}
                        media={value.media}
                        like={value.like}
                        comments={value.comments}
                        retweet={value.retweet}
                    />);

    });
    
    return (
        <div className='content column'>
            {posts}
        </div>
    );
};

export default Home;