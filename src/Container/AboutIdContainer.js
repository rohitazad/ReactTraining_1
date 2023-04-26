import React from "react";
import Heading2 from '../Components/Heading_2';
import {useParams} from 'react-router-dom';
const AboutIdContainer = ()=>{
    const myParams = useParams();
    console.log('myParams', myParams)
    const aboutId = myParams.id;
    return (
        <>
           <Heading2 data={`Hello ABout Id ${aboutId}`}/> 
        </>
    )
}

export default AboutIdContainer;