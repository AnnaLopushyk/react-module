import {Routes, Route, Link} from 'react-router-dom'


import UsersPage from './pages/UsersPage/UsersPage';
import PostsPage from './pages/PostsPage/PostsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';
import SingleUserPage from './pages/SingleUserPage/SingleUserPage';


function App() {
    return (
        <div>


            <Routes>

                <Route path={'/'} element = {<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}/>
                         <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    {/*<Route/>*/}

                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/*'} element={<NotFoundPage/>}/>

                </Route>

            </Routes>

        </div>

    );
}

export default App;
