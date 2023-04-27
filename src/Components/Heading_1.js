import React from 'react';

import {UserState} from '../ContextAPI/context';


const Heading_1 = ()=>{
    const data = UserState();
    const inputValue = data.state.data
    const changeTextHanlder = (e)=>{
        const value = e.target.value;
        console.log(value);
        data.dispatch({
            type:'CHANGE_DATA',
            payload:value
        })
    }

    return (
        <>
            <h1>{inputValue}</h1>
            <input type="text" onChange={changeTextHanlder} value={inputValue} placeholder="Enter your name" />
        </>
    )
}

export default Heading_1;