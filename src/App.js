import './App.css';

import Users from "./components/Users/Users";
import {useState} from "react";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postService} from "./services/post.service";

function App() {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);


    const getUser = (user) => {
      setUser(user)
        setPosts([])
    };

    const getUserId = (id) => {
      postService.getByUserId(id).then(value => setPosts([...value]))
    }

  return (
    <div className="App">
      <div className={'wrap'}>
          <div> <Users getUser={getUser}/> </div>
          <div> {user && <UserDetails user={user} getUserId={getUserId}/>} </div>
      </div>
        { !!posts.length &&< Posts posts={posts}/>}
    </div>
  );
}

export default App;
