import { combineReducers } from "redux";
import postsReducer from '../post/redux/postsReducer'
import usersReducer from "../user/redux/usersReducer";



export default combineReducers({
    posts: postsReducer,
    // @ts-ignore
    users: usersReducer
})