import React, {useReducer, useContext} from "react";
import {userDataReducer} from './reducer';

const UserData = React.createContext();
const ContextFunction = ({children})=>{
    const [state, dispatch] = useReducer(userDataReducer, {
        data:'Hello ET !!',
    })
    return (
        <>
           <UserData.Provider value={{state, dispatch}}>{children}</UserData.Provider> 
        </>
    )
}
export default ContextFunction;

export const UserState = ()=>{
    return useContext(UserData);
}
