import React from 'react';
import './Post.css';
import Reactions from './reactions/Reactions';

const Post = ( props ) => {
    return (
        <div className='post column'>
            <div className='post-head row'>
                <img src={props.avatar} alt={props.name} className='post-head__avatar' />
                <h2 className="post-head__name">{props.name}</h2>
                <p className='post-head__nickname'>@{props.nickname}</p>
                <p className='post-head__date'>{props.date}</p>
            </div>
            <div className='post-main column'>
                <div className='post-main__content column'>
                    <p className='post-main__content-text'>{props.content}</p>
                    <img src={props.media} alt='media' className='post-main__content-media' />
                </div>
                <div className='post-main__reactions row'>
                    <div className='post-main__reactions-item row'>
                        <Reactions alt='like' />
                        <p>{props.like}</p>
                    </div>
                    <div className='post-main__reactions-item row'>
                        <Reactions variant='comment' alt='comment' />
                        <p>{props.comments}</p>
                    </div>
                    <div className='post-main__reactions-item row'>
                    <Reactions variant='retweet' alt='retweet' />
                        <p>{props.retweet}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;