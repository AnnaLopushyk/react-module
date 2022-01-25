import React from 'react';

import './User.css'

const User = ({user, getUser}) => {
const {id, name, username, email}= user
    return (
        <div className='wrap'>
            <div>{id}) {name}-{username}-{email}</div>
            <button onClick={()=>getUser(user)}>{id}. User's details</button>
        </div>
    );
};

export default User;