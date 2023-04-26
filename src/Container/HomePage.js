import React, {useState} from "react";
import Heading1 from '../Components/Heading_1';
import Heading2 from '../Components/Heading_2';
const HomePageContiner = ()=>{
    const [title, setTitle] = useState('Test Title !!');
    const updateTitle = (value)=>{
        setTitle(value)
    }
    return (
        <>
           <Heading1 onchangefunction={updateTitle}  data={title}/>
           <Heading2  data="Home page h2 tag"/> 
        </>
    )
}

export default HomePageContiner;