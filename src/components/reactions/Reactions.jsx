import React from 'react';
import styles from './Reactions.module.css';
import like from './img/like.svg';
import comment from './img/comment.svg';
import retweet from './img/retweet.svg';

const Reactions = ( { variant = 'like', alt} ) => {
    const ReactionsImg = () => {
        switch ( variant ) {
            case 'comment': {
                return comment;
            }

            case 'retweet': {
                return retweet
            }

            default: {
                return like;
            }
        }
    };
    return (
        <img src={ReactionsImg()} alt={alt} className={`${styles['reaction']} `} />
    );
};

export default Reactions;