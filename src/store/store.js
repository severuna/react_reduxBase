import { createStore,  combineReducers } from "redux";

const reducers = {
    author_1: {
        id: '',
        name: '',
        nickname: '',
        avatar: '',
        posts: [
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
        ]
    },
    author_2: {
        id: '',
        name: '',
        nickname: '',
        avatar: '',
        posts: [
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
        ]
    },
    author_3: {
        id: '',
        name: '',
        nickname: '',
        avatar: '',
        posts: [
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
        ]
    },
    author_4: {
        id: '',
        name: '',
        nickname: '',
        avatar: '',
        posts: [
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
        ]
    },
    author_5: {
        id: '',
        name: '',
        nickname: '',
        avatar: '',
        posts: [
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
            {
                num: '',
                date: '',
                content: '',
                media: '',
                reactions: {
                    like: '',
                    comments: '',
                    retweet: ''
                }
            },
        ]
    }
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
