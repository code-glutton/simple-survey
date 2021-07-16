import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      answers:{
        q1:'',
        q2:'',
        q3:'',
        q4:''
      }
    }
  }

  render(){
    return (
      <div className="App">
        <h1>survey app</h1>
      </div>
    );
  }

}

export default App;
