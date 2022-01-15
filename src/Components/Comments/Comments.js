import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

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
                comments.map(comments => <p key={comments.id}> <Comment item={comments}/></p>)
            }
        </div>
    );
};

export default Comments;