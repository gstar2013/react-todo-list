import { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

class App extends Component{
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <TodoInput/>
          <TodoList/>          
        </div>
      </div>
    )
  }
}

export default App;
