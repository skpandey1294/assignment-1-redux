import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

// import thunk from 'redux-thunk'

// import postReducer from '../reducers/postReducer.js'

// import usersPostReducer from '../reducers/usersPostReduce.js'

// import userReducer from '../reducers/usersReducer.js'

// import usersCommentReducer from '../reducers/usersCommentReducer.js'

// import userInfoReducer from '../reducers/userInfoReducer.js'

// import albumsReducer from '../reducers/albumsReducer.js'

// import albumPhotosReducer from '../reducers/albumPhotosReducer.js'

import rootReducers from '../reducers/index.js'

const thunkMiddleware = [thunk]

console.log(rootReducers, 'rootReducers')

export const store = createStore(rootReducers, compose(applyMiddleware(...thunkMiddleware)))
    