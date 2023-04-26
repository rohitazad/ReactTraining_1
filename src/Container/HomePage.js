import React, {useState} from "react";
import Heading_1 from '../Components/Heading_1';
import Heading_2 from '../Components/Heading_2';
const HomePageContiner = ()=>{
    const [title, setTitle] = useState('Test Title !!');
    const updateTitle = (value)=>{
        setTitle(value)
    }
    return (
        <>
           <Heading_1 onchangefunction={updateTitle}  data={title}/>
           <Heading_2  data="Home page h2 tag"/> 
        </>
    )
}

export default HomePageContiner;