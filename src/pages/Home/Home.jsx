import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import Post from '../../components/Post';

const Home = () => {

    // const dispatch = useDispatch();

    const AUTHOR_LIST = useSelector((state) => state);

    // const show = () => {
    //     dispatch(setAuthorsAction());
    // }

    let posts = [];

    for (const [key, value] of Object.entries(AUTHOR_LIST.authors)) {
        value.posts.forEach(element => {
            posts.push(<Post 
                key={key + Math.random()}
                name={value.name} 
                nickname={value.nickname} 
                avatar={value.avatar}
                date={element.date}
                content={element.content}
                media={element.media}
                like={element.reactions.like}
                comments={element.reactions.comments}
                retweet={element.reactions.retweet}
                />);
        })
    } 
    
    return (
        <div className='content column'>
            {posts}
        </div>
    );
};

export default Home;