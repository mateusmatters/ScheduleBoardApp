import React from 'react'

const DepartmentMenu = ({setSelectedDepartment}) => {
  const departments = ["ALL", "ADMINISTRATION", "BAKERY", "SERVICE-DELI", "FOOD-COURT", "FRONT-END", "TIRE", "HEARING-AID", "LOT-CREW", "MEAT", "MEMBERSHIP", "MEMBER-SERVICE", "MERCHANDISING", "OPTICAL", "PHARMACY", "RTV"];
  return (
    <ul className="department-nav-bar">
        <li className="department-spectacle">Departments</li>
        {departments.map((department)=>(
          <li key={department} onClick={()=>{setSelectedDepartment(department)}} className="department-element"> {department}</li>
        ))}
    </ul>
  )
}

export default DepartmentMenu
