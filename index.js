import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees:[
        {
        name:'Ram Prasad',
        email:'ram_prasad@gmail.com',
        id:10001
      },
      {
        name:'Hari Prasad',
        email:'hari_prasad@gmail.com',
        id:10002
      },
      {
        name:'Murali Prasad',
        email:'murali_prasad@gmail.com',
        id:10003
      },
      {
        name:'Kali Prasad',
        email:'kali_prasad@gmail.com',
        id:10001
      }
      ],
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
