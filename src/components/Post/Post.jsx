import React from 'react';
import './Post.css';
import Reactions from '../reactions/Reactions';
import snape from './img/snape.jpg';
import luna from './img/luna.jpg';
import draco from './img/draco.jpg';
import lucius from './img/lucius.jpg';
import tom from './img/tom.jpg';
import oops from './img/oops.avif';


const Post = ( props ) => {

    console.log(props.name)

    const getAvatar = ( ) => {
        
        if ( String(props.name) === 'Severus Snape') {
            return snape
        } else if ( String(props.name) === 'Luna Lovegood') {
            return luna
        } else if ( String(props.name) === 'Draco Malfoy') {
            return draco
        } else if ( String(props.name) === 'Lucius Malfoy') {
            return lucius
        } else if ( String(props.name) === 'Lord Voldemort') {
            return tom
        }
        
    }
    
    const randomInt = ( ) => {
        return Math.floor(Math.random() * (600 - 157) + 157);
    }

    return (
        <div className='post column'>
            <div className='post-head row'>
                <img src={getAvatar()} alt={props.name} className='post-head__avatar' />
                <h2 className="post-head__name">{props.name}</h2>
                <p className='post-head__nickname'>@{props.nickname}</p>
                <p className='post-head__date'>{props.date}</p>
            </div>
            <div className='post-main column'>
                <div className='post-main__content column'>
                    <p className='post-main__content-text'>{props.content}</p>
                    <img src={props.media === undefined ? oops :  props.media } alt='media' className='post-main__content-media' />
                </div>
                <div className='post-main__reactions row'>
                    <div className='post-main__reactions-item row'>
                        <Reactions alt='like' />
                        <p>{props.like === undefined ? randomInt() :  props.like}</p>
                    </div>
                    <div className='post-main__reactions-item row'>
                        <Reactions variant='comment' alt='comment' />
                        <p>{props.comments === undefined ? randomInt() :  props.comments}</p>
                    </div>
                    <div className='post-main__reactions-item row'>
                    <Reactions variant='retweet' alt='retweet' />
                        <p>{props.retweet === undefined ? randomInt() :  props.retweet}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;