import axios from 'axios'
import {USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAIL,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAIL,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL, DETAILS_USER_REQUEST, DETAILS_USER_SUCCESS, DETAILS_USER_FAIL} from '../constants/crudConstants'

const BASEURL='http://localhost:5000'

export const listUser = ()=> async(dispatch)=>{

    try {
        
        dispatch({type:USER_LIST_REQUEST})
        
        const {data} = await axios.get(`${BASEURL}/liststudent`)
        //console.log(data)
        dispatch({type:USER_LIST_SUCCESS,payload:data.query})

    } catch (error) {
        dispatch({type:USER_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }

}

export const getUserDetails = (id)=> async(dispatch)=>{

    try {
        
        dispatch({type:DETAILS_USER_REQUEST})
        
        const {data} = await axios.get(`${BASEURL}/singlestudent/${id}`)
        //console.log(data)
        dispatch({type:DETAILS_USER_SUCCESS,payload:data.query})

    } catch (error) {
        dispatch({type:DETAILS_USER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }

}

export const createUser = (name,mob)=> async(dispatch)=>{

    try {
        
        dispatch({type:CREATE_USER_REQUEST})
        
         await axios.post(`${BASEURL}/add-student`,{name,mob})
        
        dispatch({type:CREATE_USER_SUCCESS})

    } catch (error) {
        dispatch({type:CREATE_USER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }

}

export const deleteUser = (id)=> async(dispatch)=>{

    try {
        
        dispatch({type:DELETE_USER_REQUEST})
        
        await axios.delete(`${BASEURL}/delete-student/${id}`)
        
        dispatch({type:DELETE_USER_SUCCESS})

    } catch (error) {
        dispatch({type:DELETE_USER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }

}

export const updateUser = (name,mob,id)=> async(dispatch)=>{
    
    try {
        dispatch({type:UPDATE_USER_REQUEST})
        
        await axios.put(`${BASEURL}/update-student/${id}`,{name,mob})
         
        dispatch({type:UPDATE_USER_SUCCESS})

        

    } catch (error) {
        dispatch({type:UPDATE_USER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,})
    }

}