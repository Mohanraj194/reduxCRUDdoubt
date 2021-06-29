import { Container } from 'react-bootstrap';
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import UserList from "./component/UserList";
import CreatUser from './component/CreatUser';



function App() {
  return (
    <Router>
      <Container>
      
      <Route path='/' component={UserList} exact/>
      <Route path='/createstudent' component={CreatUser} exact/>
      <Route path='/createstudent/:id' component={CreatUser} exact/>
        
      </Container>
    </Router>
  
  );
}

export default App;
