import React from 'react';

const Comment = ({item}) => {
    return (
        <div>
            {item.id}. {item.body}
        </div>
    );
};

export default Comment;