import React from 'react';

const User = ({user:{name}}) => {

    return (
        <div>
            {name}
        </div>
    );
};

export default User;