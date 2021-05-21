import { USER_COUNT_UP } from "../actions/userAction";

const initState ={
    userName:'React Native 02'
};

const userReducer = (state=initState, action)=>{
    switch (action.type) {
        case USER_COUNT_UP:
            state.userName='123'
            return {...state}
        default:
            return {...state}
    }
};

export default userReducer;