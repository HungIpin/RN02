import { combineReducers } from "redux";
import countReducer from './countReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'
const rootReducer = combineReducers({
    countReducer,
    userReducer,
    gameReducer
})

export default rootReducer;