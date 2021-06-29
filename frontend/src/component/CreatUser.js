import React,{useState,useEffect} from 'react'
import { Form,Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {createUser,getUserDetails} from '../Action/userAction'
import { DETAILS_USER_RESET } from '../constants/crudConstants'
const CreatUser = ({history,match}) => {

    const dispatch = useDispatch()
    const [uname, setUname] = useState('')
    const [umob, setUmob] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const {userDetails:userData,success}=userDetails
    
    if(success){

//error while seting the data in state


        //setUmob(userData.mob)
        //setUname(userData.name)
         console.log(userData.name)
      }
    

    const userId = match.params.id
    useEffect(() => {
       if(userId){
           dispatch(getUserDetails(userId))
       }
       return ()=>{
           console.log('a')
           dispatch({type:DETAILS_USER_RESET})
       }
       
    }, [match,userId])
    
    
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(createUser(uname,umob))
        setUname('')
        setUmob('')
        history.push('/')
    }
    return (
        <Form onSubmit={submitHandler}>
                    <Form.Group controlId='uname'>
                        <Form.Label>name</Form.Label>
                        <Form.Control type='text' value={uname} onChange={e=>setUname(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group controlId='umob'>
                        <Form.Label>mob</Form.Label>
                        <Form.Control type='text' value={umob} onChange={e=>setUmob(e.target.value)} required/>
                    </Form.Group>
                    <Button type='submit' className='my-2'>Create Student</Button>
        </Form>
    )
}

export default CreatUser
