import { combineReducers } from 'redux'

import postReducer from './postReducer.js'
import usersPostReducer from './usersPostReduce.js'
import usersCommentReducer from './usersCommentReducer.js'
import usersReducer from './usersReducer.js'
import userInfoReducer from './userInfoReducer.js'
import albumsReducer from './albumsReducer.js'
import albumPhotosReducer from './albumPhotosReducer.js'

const rootReducers = combineReducers({
postReducer:postReducer,
usersPostReducer:usersPostReducer,
usersCommentReducer:usersCommentReducer,
usersReducer:usersReducer,
userInfoReducer:userInfoReducer,
albumsReducer:albumsReducer,
albumPhotosReducer:albumPhotosReducer
})

export default rootReducers