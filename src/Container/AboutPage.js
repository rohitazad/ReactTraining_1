import React from "react";
import Heading1 from '../Components/Heading_1';
import Heading2 from '../Components/Heading_2';
import ModalComponents from '../Components/Modal';
import ListItemComponents from '../Components/ItemList';
const AboutPageContiner = ()=>{
    return (
        <>
           <Heading1 data="about H1 tag text" />
           <Heading2 data="about h2 tag text"/> 
            <hr />
            <ModalComponents />
            <ListItemComponents />
        </>
    )
}

export default AboutPageContiner;