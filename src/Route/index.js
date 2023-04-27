import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterCOmponents from '../Components/Footer';
import HeaderCOmponents from '../Components/Header';

const  HomePageContiner = React.lazy(()=> import('../Container/HomePage'));


const  AboutPageContiner = React.lazy(()=> import('../Container/AboutPage'));
const  AboutIdContainer  = React.lazy(()=> import('../Container/AboutIdContainer'));
const  ContactContainer =  React.lazy(()=> import('../Container/Contact'));
const PostDetailsContainer =  React.lazy(()=> import('../Container/PostDetailsContainer'));

const RouterConfig = ()=>{
    
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <HeaderCOmponents />
                    <Routes>
                        <Route element={<HomePageContiner />} path="/" />
                        <Route element={<AboutPageContiner />} path="/about" />
                        <Route element={<AboutIdContainer />} path="/about/:id" />
                        <Route element={<ContactContainer />} path="/contact" />
                        <Route element={<PostDetailsContainer />} path="/post/:id" />
                    </Routes>
                <FooterCOmponents />
            </BrowserRouter>
        </Suspense>
        
        </>
    )
}
export default RouterConfig;