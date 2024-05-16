import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function Request(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const axiosRequest = async () => {
            const response = await axios.get('https://dummyjson.com/posts')
            setPosts(response.data.posts)
        }
        axiosRequest()
        // console.log(axiosRequest())
    }, []);


    return (
        <div>
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/request/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Request;