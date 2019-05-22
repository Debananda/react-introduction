import React from 'react';
import './EmployeeCard.css';
const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">{props.employee.name}</div>
    </div>
  )
}
export default EmployeeCard;