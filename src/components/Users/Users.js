import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services/user.service";

const Users = ({getUser,getUserId}) => {
    const [users, setUsers] = useState([]);

        useEffect(()=> {
            userService.getAll().then(value=>setUsers(value))
        },[])


    return (
        <div>
            {
                users.map(user =>  <User key={user.id} user={user} getUser={getUser} getUserId={getUserId}/>)
            }
            
        </div>
    );
};

export default Users;