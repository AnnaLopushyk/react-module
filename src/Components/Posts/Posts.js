import React, {useEffect, useState} from 'react';

const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                setPosts(posts);
            });
    }, []);
      

    return (
        <div>
            <ul>
                {
                    posts.map(posts => <li key={posts.id}>{posts.title}</li>)
                }
            </ul>

        </div>
    );
};

export default Posts;