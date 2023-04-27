import React, {useState} from "react";
import Heading1 from '../Components/Heading_1';
import Heading2 from '../Components/Heading_2';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const HomePageContiner = ()=>{
    const [title, setTitle] = useState('Test Title !!');
    const updateTitle = (value)=>{
        setTitle(value)
    }
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Heading2  data="Home page h2 tag"/> 
                </Col>
                <Col>
                    <Heading2  data="Home page h2 tag"/> 
                </Col>
            </Row>
        </Container>
           
        </>
    )
}

export default HomePageContiner;