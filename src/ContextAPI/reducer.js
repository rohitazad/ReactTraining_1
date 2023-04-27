

export const userDataReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_DATA':
            return{
                ...state, data:action.payload
            };
        default:
            return {...state}
    }
}