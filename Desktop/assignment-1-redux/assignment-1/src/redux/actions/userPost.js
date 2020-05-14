import {
    FETCH_USERS_POST_REQUEST,
    FETCH_USERS_POST_SUCCESS,
    FETCH_USERS_POST_FAILURE
  } from '../action-constant/index'
  
  export const fetchUsersPostRequest = () => {
    return {
      type: FETCH_USERS_POST_REQUEST
    }
  }
  
  export const fetchUsersPostSuccess = post => {
    return {
      type: FETCH_USERS_POST_SUCCESS,
      payload: post
    }
  }
  
  export const fetchUsersPostFailure = error => {
    return {
      type: FETCH_USERS_POST_FAILURE,
      payload: error
    }
  }