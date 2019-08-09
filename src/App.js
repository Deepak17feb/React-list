import React, { Component } from 'react';
// import logo from './logo.svg';
import User from './components/user';
import uniqueId from 'react-html-id';
import './App.css';

class App extends Component {
  constructor() {
    super()
    uniqueId.enableUniqueIds(this)
  }
  state = {
    users: [
      {name:'john', age:20},
      {name:'peter', age:30},
      {name:'jill', age:40}
    ]
  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index)=>{
              return(
                <User age={user.age} key={this.nextUniqueId()} delEvent={this.deleteUser.bind(this, index)}>{user.name}</User>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
