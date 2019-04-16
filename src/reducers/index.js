import { combineReducers } from 'redux'
import PostReducer from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: PostReducer,
    users: usersReducer,
})