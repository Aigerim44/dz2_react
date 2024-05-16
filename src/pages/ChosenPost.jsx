import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import '../index.css'

function ChosenPost() {
    const [answer, setAnswer] = useState({})
    const {dataId} = useParams()
    useEffect(() => {
        const chooseRequest = async () => {
            const response = await axios.get(`https://dummyjson.com/posts/${dataId}`)
            setAnswer(response.data)
        }
        chooseRequest()
        console.log({dataId})
    }, [dataId])
    return (
        <>
            <div>
                Post from {dataId}
                <h1>{answer.title}</h1>
                <p>{answer.body}</p>
            </div>
        </>
    );
}

export default ChosenPost;