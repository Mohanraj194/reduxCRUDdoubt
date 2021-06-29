import {USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAIL,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL, DETAILS_USER_REQUEST, DETAILS_USER_SUCCESS, DETAILS_USER_FAIL, DETAILS_USER_RESET} from '../constants/crudConstants'

export const userListReducer = (state={users:[]},action)=>{
    switch (action.type) {
        case USER_LIST_REQUEST:
           return {loading:true}
        case USER_LIST_SUCCESS:
            return {loading:false,users:action.payload}   
        case USER_LIST_FAIL:
           return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const userCreateReducer = (state={},action)=>{
    switch (action.type) {
        case CREATE_USER_REQUEST:
           return {loading:true}
        case CREATE_USER_SUCCESS:
            return {loading:false,success:true}   
        case CREATE_USER_FAIL:
           return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const userDetailsReducer = (state={userDetails:{}},action)=>{
    switch (action.type) {
        case DETAILS_USER_REQUEST:
           return {loading:true}
        case DETAILS_USER_SUCCESS:
            return {loading:false,success:true,userDetails:action.payload}   
        case DETAILS_USER_FAIL:
           return {loading:false,error:action.payload}
           case DETAILS_USER_RESET:
           return {userDetails:{},success:false}
        default:
            return state
    }
}

export const userDeleteReducer = (state={},action)=>{
    switch (action.type) {
        case DELETE_USER_REQUEST:
           return {loading:true}
        case DELETE_USER_SUCCESS:
            return {loading:false,success:true}   
        case DELETE_USER_FAIL:
           return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const userUpdateReducer = (state={user:{}},action)=>{
    switch (action.type) {
        case UPDATE_USER_REQUEST:
           return {loading:true}
        case UPDATE_USER_SUCCESS:
            return {loading:false,success:true}   
        case UPDATE_USER_FAIL:
           return {loading:false,error:action.payload}
        default:
            return state
    }
}