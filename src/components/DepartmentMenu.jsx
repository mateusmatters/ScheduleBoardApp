import React from 'react'
import { useState, useRef, useEffect } from 'react';

//the reason for the curly brackets is bc of object destructuring
//the props object is destructured into many small things
//if not destrucutred you would have to get it like this: props.setSelectedDepartment (where beginning is DepartmentMenu=(props)=> ...)
const DepartmentMenu = ({setEmployeesByDept, employees}) => {
  const prevEvent = useRef(null);
  const allRef = useRef(null);

  const departments = ["ADMINISTRATION", "BAKERY", "SERVICE-DELI","FOOD-COURT",
     "FRONT-END", "TIRE", "HEARING-AID", "LOT-CREW", "MEAT", "MEMBERSHIP",
     "MEMBER-SERVICE", "MERCHANDISING", "OPTICAL", "PHARMACY", "RTV"];

  function clickFunction(e, department){
    if(prevEvent.current !== null){
      prevEvent.current.target.classList.remove("abc");
    }
    e.target.classList.add("abc");
    prevEvent.current = e;
    setEmployeesByDept(employees.getSpecificDepartment(department));
  }

  useEffect(() => {
    if (allRef.current) {
      allRef.current.click(); // Simulate a click event on "ALL"
    }
  }, []);

  return (
    <ul className="department-nav-bar">
        <li className="department-spectacle">Departments</li>
        <li ref={allRef} key="ALL" onClick={(e) => clickFunction(e, "ALL")} className="department-element"> ALL</li>
        {departments.map((department)=>(
          <li key={department} onClick={(e) => clickFunction(e, department)} className="department-element"> {department}</li>
        ))}
    </ul>
  )
}

export default DepartmentMenu;