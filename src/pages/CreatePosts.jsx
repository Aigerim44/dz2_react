import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function CreatePosts(props) {
    const [title, setTitle] = useState('')
    const [response, setResponse] = useState(null)
    const navigate = useNavigate()

    // useEffect(() => {
    //     const getInfo = async () => {
    //         const response = await fetch('https://dummyjson.com/posts', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({title})
    //         })
    //         const data = await response.json();
    //         setResponse(data);
    //     }
    //     getInfo()
    // }, [title])
    const dataApprove = (event) => {
        event.preventDefault()
        navigate('/request')
    }

    return (
        <div>
            <h3>Create Post Form</h3>
            <form onSubmit={dataApprove}>
                <input type="text"/>
                <button>create</button>
            </form>
        </div>
    );
}

export default CreatePosts;