import React, {  Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';

import TopForm from './components/TopForm'
import Login from './components/Login'
import Logout from './components/Logout'

class App extends Component {
  render() {
     return (
       <div className='App'>
         <Login/>
         <Logout />
         <TopForm/>
       </div>
     )
  }
}

export default App