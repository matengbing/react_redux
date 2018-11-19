
const ADD='ADD';
const REDUCE='REDUCE';

//reducer
export function count(state=10,action) {
    switch (action.type) {
        case ADD:
            return state+1;
        case REDUCE:
            return state-1;
        default:
            return state;
    }
}


//action create
export function add() {
    return {type:ADD}
}

export function reduce() {
    return {type:REDUCE}
}


export function addAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add())
        },1000);
    }
}