import './App.css';
import {useEffect, useState} from "react";

import Form from "./components/Form/Form";
import {userService} from "./services/user.service";
import Users from "./components/Users/Users";

function App() {

  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);

useEffect(()=> {
  userService.getAll().then(value => {
    setUsers([...value])
        setUsersFilter([...value])
  })
}, [])

  const getFilter = (data)=> {
     let filterArr = [...users]


      if(data.name) {
          filterArr = filterArr.filter(user=> user.name.toLowerCase().includes(data.name.toLowerCase()))
      }
      if(data.username) {
          filterArr = filterArr.filter(user=> user.username.toLowerCase().includes(data.username.toLowerCase()))
      }
      if(data.email) {
          filterArr = filterArr.filter(user=> user.email.toLowerCase().includes(data.email.toLowerCase()))
      }
      setUsersFilter(filterArr)
  }
  return (
    <div className="App">
            <Form getFilter={getFilter}/>
             <hr/>
            <Users users={usersFilter}/>
    </div>
  );
}

export default App;
