import React from "react";
import Heading2 from '../Components/Heading_2';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {UserState} from '../ContextAPI/context';
const HomePageContiner = (props)=>{
    const stateData = UserState();
    const title = stateData.state.data
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <Heading2  data="Home page h2 tag"/> 
                    <br />
                    {props.data}
                    {title}
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