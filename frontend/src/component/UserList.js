import React,{useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {listUser,deleteUser} from '../Action/userAction'
const UserList = ({history}) => {
    
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {users,loading} = userList
    const userDelete = useSelector(state => state.userDelete)
    const {success:DeleteSuccess}=userDelete

    
    useEffect(() => {
        dispatch(listUser())
    }, [dispatch,DeleteSuccess])
    

    const deleteHandler = (id)=>{
        if(window.confirm('Are You Sure'))
        {
            dispatch(deleteUser(id))
        }
    }

    return (
        <>
        <Button type='button' className='my-3' onClick={()=>{history.push('/createstudent')}}>Add Student</Button>
         {!loading&&(
             <Table striped bordered hover responsive className='table-sm'>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Mob</th>
                     <th>Action</th>
                   
                 </tr>
             </thead>
             <tbody>
                        {users.map(user=>(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.mob}</td>
                                <td>
                                    <Link to={`/createstudent/${user._id}`}>
                                        <Button variant='success' >Update</Button> 
                                    </Link>
                                    
                                    <Button variant='danger' onClick={()=>deleteHandler(user._id)}>Delete</Button></td>
                                
                            </tr>
                        ))}
                    </tbody>
             </Table>
         )}

      
            
        </>
    )
}

export default UserList
