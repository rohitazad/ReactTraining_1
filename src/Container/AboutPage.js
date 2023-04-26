import React from "react";
import Heading1 from '../Components/Heading_1';
import Heading2 from '../Components/Heading_2';
import {Link} from 'react-router-dom';
const AboutPageContiner = ()=>{
    return (
        <>
           <Heading1 data="about H1 tag text" />
           <Heading2 data="about h2 tag text"/> 
           <Link to="/about/5">Go to ABout Page Id 5</Link><br />
           <Link to="/about/6">Go to ABout Page Id 6</Link><br />
           <Link to="/about/7">Go to ABout Page Id 7</Link>
        </>
    )
}

export default AboutPageContiner;