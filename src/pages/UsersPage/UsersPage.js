import React, {useEffect, useState} from 'react';
import {usersService} from '../../services/users.service';
import User from '../../components/User/User';

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        usersService.getAll().then(value => setUsers([...value]))
    },[])

    return (
        <div>
            <h1>Users</h1>
            <div>{users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default UsersPage;