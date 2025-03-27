import './App.css';
import {Employee} from "./class definitions/employee"
import {SortedArray} from "./class definitions/sorted-array"
import { useState, useEffect, useContext} from 'react';
import {createTimeStamp, parseTimeString, simplifiedTimeStampString, chooseRightColor} from './class definitions/helperFunctions';

import AddEmployeeTextFields from './components/AddEmployeeTextFields';
import employeeArray from './class definitions/testEmployeesArray';

import TimeContext from "./components/TimeContext"
import DepartmentMenu from './components/DepartmentMenu';
import EmployeeComponent from './components/EmployeeComponent'
import SearchBar from './components/SearchBar';
function App() {
  const {time} = useContext(TimeContext);
  const [employees, setEmployees] = useState(employeeArray);
  const [showAddScreen, setShowAddScreen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  function handleEmployeeSubmit(firstName, lastName, segStart, segEnd){
    let [hours, mins] = parseTimeString(segStart);
    let [hours2, mins2] = parseTimeString(segEnd);
    const empx = new Employee(firstName, lastName, createTimeStamp(hours,mins), createTimeStamp(hours2,mins2), 5, "Developer");
    const updatedEmployees = new SortedArray(Employee);
    updatedEmployees.array = [...employees.array];
    updatedEmployees.add(empx);
    setEmployees(updatedEmployees);
  }
  return (
      <div className="App">
        <div className="top-page">
          <div>
            <div>store name: 0213-Gaithersburg</div>
          </div>
          <div>
            <div>date: </div>
          </div>
          <div>
            <div>planned sales</div>
            <div>planned hours</div>
            <div>$/LHR Plan</div>
          </div>
          <div>
            <div>Gas Sales</div>
            <div>Sched Hrs</div>
            <div>$/LHR Schd</div>
          </div>
        </div> 
        <h2>{time.getHours()}:{time.getMinutes()}</h2>
        <SearchBar/>
        <DepartmentMenu setSelectedDepartment={setSelectedDepartment}/>
        <div className="grid">
          <div className="row-elt">
            <div className= "column-headings grid-element"><b>TM/Reg</b></div>
            <div className= "column-headings grid-element"><b>Job</b></div>
            <div className= "column-headings grid-element"><b>Name</b></div>
            <div className= "column-headings grid-element"><b>Hrs Day/Seg</b></div>
            <div className= "column-headings grid-element"><b>Seg. Start</b></div>
            <div className= "column-headings grid-element"><b>Break1</b></div>
            <div className= "column-headings grid-element"><b>Lunch</b></div>
            <div className= "column-headings grid-element"><b>Break2</b></div>
            <div className= "column-headings grid-element"><b>Seg. End</b></div>
            <div className= "column-headings grid-element"><b>Waiver</b></div>
            <div className= "column-headings grid-element"><b>Duties</b></div>
          </div>
          {/* the error is somewhere around here */}
          {employees.getSpecificDepartment(selectedDepartment).map((employee, index) => (
            <EmployeeComponent employee={employee} index ={index} employees={employees} setEmployees={setEmployees} time={time}/>
          ))}
          
        </div>
        <button onClick={() =>setShowAddScreen(prev => !prev)}>add row</button>
        {showAddScreen ? <AddEmployeeTextFields onSubmit={handleEmployeeSubmit}/> : <></>}
      </div>
  );
}

export default App;