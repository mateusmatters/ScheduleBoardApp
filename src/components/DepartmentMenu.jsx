import React from 'react'
import { useState, useRef, useEffect } from 'react';

//the reason for the curly brackets is bc of object destructuring
//the props object is destructured into many small things
//if not destrucutred you would have to get it like this: props.setSelectedDepartment (where beginning is DepartmentMenu=(props)=> ...)
const DepartmentMenu = ({setSelectedDepartment}) => {
  const prevEvent = useRef(null);
  const allRef = useRef(null);

  const departments = ["ADMINISTRATION", "BAKERY", "SERVICE-DELI","FOOD-COURT",
     "FRONT-END", "TIRE", "HEARING-AID", "LOT-CREW", "MEAT", "MEMBERSHIP",
     "MEMBER-SERVICE", "MERCHANDISING", "OPTICAL", "PHARMACY", "RTV"];

  function clickFunction(e, department){
    console.log("comes in here 1")
    if(prevEvent.current !== null){
      console.log("comes in here 2")
      prevEvent.current.target.classList.remove("abc");
    }
    console.log("comes in here 3")
    e.target.classList.add("abc");
    prevEvent.current = e;
    setSelectedDepartment(department);
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
        {/* <li key="FRONT-END" onClick={(e) => clickFunction(e, "FRONT-END")} className="department-element">FRONT-END</li>
        <li key="PHARMACY" onClick={(e) => clickFunction(e, "PHARMACY")} className="department-element">PHARMACY</li>
        <li key="LOT-CREW" onClick={(e) => clickFunction(e, "LOT-CREW")} className="department-element"> LOT-CREW</li> */}
    </ul>
  )
}

export default DepartmentMenu;