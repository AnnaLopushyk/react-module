import React, {useEffect, useState} from 'react';

const Comments = () => {
    const [comments, setComments]=useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => {
                setComments(comments);
            });
    }, []);
    
    return (
        <div className='comment'>
            {
                comments.map(comments => <li key={comments.id}> {comments.body}</li>)
            }
        </div>
    );
};

export default Comments;