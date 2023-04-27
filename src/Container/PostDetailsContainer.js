import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import BlogListComponents from '../Components/BlogListItem';

const PostDetailsContainer = ()=>{
    const params = useParams();
    let [postDetails, setPostDetails] = useState('');

    console.log('params', params);
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const singleDataGet = ()=>{
        fetch(`${API_URL}posts/${params.id}`)
            .then(response => response.json())
            .then(json => setPostDetails(json))
    }

    useEffect(()=>{
        singleDataGet()
    }, [])

    return (
        <>
            <h1>Post Details {params.id}</h1>
            {
                postDetails && postDetails !== '' ?  <BlogListComponents redirect="yes" post={postDetails} /> : '<p>Plesae wait data is coming ...</p>'
            }
        </>
    )
}

export default PostDetailsContainer;