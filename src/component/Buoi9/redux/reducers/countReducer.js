import { Count_down, Count_up } from "../actions/countAction";

const initState = {
    number:9,

};

const countReducer =(state=initState,action) => {
    console.log(action);
    switch (action.type) {
        case Count_up:
            // state.number++;
            state.number = action.payload;
            return {...state}  ;
        case Count_down:
            // state.number--;
            state.number = action.payload;
            return {...state}  ;
        default:
            return {...state};
    }
};

export default countReducer;