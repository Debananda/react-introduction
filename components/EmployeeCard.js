import React from 'react';
import './EmployeeCard.css';
const EmployeeCard = (props) => {
  const handleInputChange=(event)=>{
    props.changeName(event.target.value, props.employee.id);
  }
  return (
    <div className="card">
      <div className="card-header">{props.employee.name}</div>
      <input type="text" value={props.employee.name} onChange={handleInputChange}/>
    </div>
  )
}
export default EmployeeCard;