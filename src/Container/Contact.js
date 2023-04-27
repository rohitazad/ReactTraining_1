import React, {useEffect, useState} from 'react';
import BlogListComponents from '../Components/BlogListItem';
const ContactContainer = ()=>{
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0);
    let [posts, setPosts] = useState([]);

    const countIncrease = ()=>{
        let increaseCount = count++;
        setCount(increaseCount);
    }
    const numberHandlerChange = ()=>{
        let updateNumber = number ++;
        setNumber(updateNumber)
    }
    const fetchData = ()=>{
        fetch(`${API_URL}posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }
    useEffect(()=>{
        console.log('My Components Running Components Did Mount Running');
        fetchData();
    }, [])
    const PostHtmlGenrate = ()=>{
        return (
            posts && posts.length > 0 ? posts.map((item, index)=>{
                return <BlogListComponents post={item} key={index} />
            }) : '<p>Data is loading plesae wait.</p>'
        )
    }
    useEffect(()=>{
        console.log('My Components Running Components Did update Running 2')
    }, [number])

    return (
        <>
            Hello i m contact page 
            <p>count :- {count}</p>
            <button onClick={countIncrease}>Click to count no.</button>
            <h1>number : {number}</h1>
            <button onClick={numberHandlerChange}>click to change number</button>
            <hr />
            <br />
            {
               posts && posts.length > 0 ? <h2> Total post of {posts.length}</h2> : '' 
            }
            {PostHtmlGenrate()}
        </>
    )
}

export default ContactContainer;