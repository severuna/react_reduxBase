import { createStore,  combineReducers } from "redux";

const reducers = {
    author_1: {
        id: 1,
        name: 'Severus Snape',
        nickname: 'apothecary',
        avatar: 'https://i.pinimg.com/736x/a9/65/77/a96577a2ee8f26042eacca3c5a4ac15d.jpg',
        posts: [
            {
                num: 1,
                date: '09.01.1960',
                content: 'Tut, tut — fame clearly isn`t everything.',
                media: 'https://res.cloudinary.com/theboxplymouth/image/upload/c_fill,f_auto,h_833,w_1480/mr5KWh5LdGGDP33vWAbSlfDGYTyfOhQlahb1AK7T.jpeg',
                reactions: {
                    like: 255,
                    comments: 356,
                    retweet: 120
                }
            },
            {
                num: 2,
                date: '20.05.1991',
                content: 'Well, it may have escaped your notice, but life isn`t fair.',
                media: 'https://i.pinimg.com/originals/88/8e/0c/888e0c9fe568a825fadee824a8d4c337.jpg',
                reactions: {
                    like: 333,
                    comments: 459,
                    retweet: 214
                }
            },
            {
                num: 3,
                date: '02.10.1984',
                content: 'The mind is not a book, to be opened at will and examined at leisure.',
                media: 'https://images.theconversation.com/files/384507/original/file-20210216-21-1sm6guy.jpg',
                reactions: {
                    like: 635,
                    comments: 541,
                    retweet: 415
                }
            },
        ]
    },
    author_2: {
        id: 2,
        name: 'Luna Lovegood',
        nickname: 'luna',
        avatar: 'https://i.pinimg.com/originals/fd/4a/06/fd4a06b42bfff6abe8a1e45cab7822fb.jpg',
        posts: [
            {
                num: 1,
                date: '13.02.1981',
                content: 'I`ve interrupted a deep thought, haven`t I? I can see it growing smaller in your eyes.',
                media: 'https://www.phos.co.uk/images/content/gallery/205_1024x572.jpg?14:13:23&_e=.jpg',
                reactions: {
                    like: 145,
                    comments: 256,
                    retweet: 189
                }
            },
            {
                num: 2,
                date: '22.10.1999',
                content: 'I sleepwalk, you see. That`s why I wear shoes to bed.',
                media: 'https://m.media-amazon.com/images/I/51CTe4ByEwL._AC_SY780_.jpg',
                reactions: {
                    like: 185,
                    comments: 356,
                    retweet: 298
                }
            },
            {
                num: 3,
                date: '05.11.1992',
                content: 'I think the answer is that a circle has no beginning.',
                media: 'https://iso.500px.com/wp-content/uploads/2015/03/balloflight_cover.jpeg',
                reactions: {
                    like: 345,
                    comments: 223,
                    retweet: 145
                }
            },
        ]
    },
    author_3: {
        id: 3,
        name: 'Draco Malfoy',
        nickname: 'best',
        avatar: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/draco-malfoy-from-harry-potter-watercolor-portrait-design-turnpike.jpg',
        posts: [
            {
                num: 1,
                date: '05.06.1980',
                content: 'You`re not dangerous at all, are you, you great ugly brute!',
                media: 'https://f.vividscreen.info/soft/7fe06adc5f4d516932fb6d19adbd5166/Cute-Kitty-Art-wide-i.jpg',
                reactions: {
                    like: 451,
                    comments: 561,
                    retweet: 501
                }
            },
            {
                num: 2,
                date: '10.01.1990',
                content: ' You better enjoy it while you can',
                media: 'https://media.timeout.com/images/105526208/750/562/image.jpg',
                reactions: {
                    like: 233,
                    comments: 269,
                    retweet: 321
                }
            },
            {
                num: 3,
                date: '30.12.1996',
                content: 'You`re gonna regret this! You and your bloody chicken!',
                media: 'https://img.taste.com.au/cibKoXCO/taste/2016/11/feta-and-lemon-stuffed-chicken-breasts-with-mash-59492-1.jpeg',
                reactions: {
                    like: 361,
                    comments: 478,
                    retweet: 536
                }
            },
        ]
    },
    author_4: {
        id: 4,
        name: 'Lucius Malfoy',
        nickname: 'father_of_the_best',
        avatar: 'https://i.pinimg.com/originals/a1/2d/4d/a12d4dab598bd4b5457803cd914bbf72.jpg',
        posts: [
            {
                num: 1,
                date: '10.10.1954',
                content: 'One day soon you are going to meet the same sticky end.',
                media: 'https://e0.pxfuel.com/wallpapers/121/15/desktop-wallpaper-dark-abstract-landscape-dark-scene.jpg',
                reactions: {
                    like: 698,
                    comments: 563,
                    retweet: 236
                }
            },
            {
                num: 2,
                date: '21.06.1974',
                content: 'What`s the use in being a disgrace to the name of wizard if they don`t even pay you well for it?',
                media: 'https://treemily.com/wp-content/uploads/2021/11/Untitled-Facebook-Cover.webp',
                reactions: {
                    like: 285,
                    comments: 487,
                    retweet: 412
                }
            },
            {
                num: 3,
                date: '23.05.1996',
                content: 'Do enjoy yourself, won`t you? While you can.',
                media: 'https://wallpaperaccess.com/full/1173639.jpg',
                reactions: {
                    like: 635,
                    comments: 365,
                    retweet: 451
                }
            },
        ]
    },
    author_5: {
        id: 5,
        name: 'Lord Voldemort',
        nickname: 'DarkLord',
        avatar: 'https://i.pinimg.com/736x/e6/19/4c/e6194cc9f285bf9f51ff305d908d38ea.jpg',
        posts: [
            {
                num: 1,
                date: '31.12.1926',
                content: 'There is no good and evil, there is only power and those too weak to seek it.',
                media: 'https://c4.wallpaperflare.com/wallpaper/555/444/905/demon-fantasy-creature-dark-power-moon-wallpaper-preview.jpg',
                reactions: {
                    like: 845,
                    comments: 635,
                    retweet: 748
                }
            },
            {
                num: 2,
                date: '05.12.1954',
                content: 'But I was willing to embrace mortal life again, before chasing immortality.',
                media: 'https://bigthink.com/wp-content/uploads/2022/08/headfinal2.jpg',
                reactions: {
                    like: 568,
                    comments: 812,
                    retweet: 365
                }
            },
            {
                num: 3,
                date: '12.12.1991',
                content: 'But no matter, no matter, things have changed.',
                media: 'https://geteducation.com.au/wp-content/uploads/2019/08/Land-of-Fire-and-Flood-2019-Hadleys-Art-Prize-finalist-Dr-Megan-Walch.jpg',
                reactions: {
                    like: 638,
                    comments: 268,
                    retweet: 333
                }
            },
        ]
    }
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
