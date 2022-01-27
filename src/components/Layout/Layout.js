import React from 'react';
import {Link,NavLink, Outlet} from 'react-router-dom';

import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <div className={classes.header}>
                <NavLink to='/users'>USERS</NavLink>
                <NavLink to='/posts'>POSTS</NavLink>
            </div>

            <div className={classes.outlet}>
                <Outlet/>
            </div>

            <div className={classes.footer}>
                @ReactRouterDom
            </div>
        </div>
    );
};

export default Layout;