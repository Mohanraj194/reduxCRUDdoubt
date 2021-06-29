import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userListReducer,userDeleteReducer,userCreateReducer,userDetailsReducer} from './Reducer/userReducer'
const reducer = combineReducers({
    userList:userListReducer,
    userCreate:userCreateReducer,
    userDelete:userDeleteReducer,
    userDetails:userDetailsReducer,

})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store