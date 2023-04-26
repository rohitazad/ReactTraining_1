import React from 'react';
import { Link } from 'react-router-dom';

const HeaderCOmponents = ()=>{
    return(
        <>
            <Link to="/">Home page</Link>
            <Link to="/about">About  page</Link>
            <Link to="/contact">Contact page</Link>
            <br /><br />
        </>
    )
}

export default HeaderCOmponents;