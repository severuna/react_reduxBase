const setAuthorsAction = ( post ) => {
    return {
        type: 'add', 
        payload: post
    };
};

export default setAuthorsAction;
