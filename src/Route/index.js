import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterCOmponents from '../Components/Footer';
import HeaderCOmponents from '../Components/Header';
import HomePageContiner from '../Container/HomePage';
import AboutPageContiner from '../Container/AboutPage';
import AboutIdContainer from '../Container/AboutIdContainer';

const RouterConfig = ()=>{
    return (
        <>
        
        <BrowserRouter>
            <HeaderCOmponents />
                <Routes>
                    <Route element={<HomePageContiner />} path="/" />
                    <Route element={<AboutPageContiner />} path="/about" />
                    <Route element={<AboutIdContainer />} path="/about/:id" />
                    <Route element="Hello i m contact page" path="/contact" />
                </Routes>
            <FooterCOmponents />
        </BrowserRouter>
        
        </>
    )
}
export default RouterConfig;