import logo from './logo.svg';
import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

import './App.css';


function App() {
  return (
    <div className="App">

        <div className='userPost'><Users/>
            <Posts/>
        </div>
            <Comments/>

    </div>
  );
}

export default App;
