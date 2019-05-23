import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import EmployeeCard from './components/EmployeeCard'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: 'Ram Prasad',
          email: 'ram_prasad@gmail.com',
          id: 10001
        },
        {
          name: 'Hari Prasad',
          email: 'hari_prasad@gmail.com',
          id: 10002
        },
        {
          name: 'Murali Prasad',
          email: 'murali_prasad@gmail.com',
          id: 10003
        },
        {
          name: 'Kali Prasad',
          email: 'kali_prasad@gmail.com',
          id: 10004
        }
      ],
      name: 'React'
    };
  }
  changeName = (name, id) => {
    const employees = this.state.employees.map(emp => {
      if (emp.id === id) {
        return { ...emp, name }
      }
      return emp;
    });
    //this.state.employees = employees;
    this.setState({ employees, name: 'Test' })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentWillReceiveProps(props) {
    console.log('componentWillRecieveProps');
  }
  shouldComponentUpdate() {
    console.log('component should update')
    return true;
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){

  }
  render() {
    console.log('render')
    return (
      <div>
        <Hello name={this.state.name} />
        {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee} changeName={this.changeName} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
