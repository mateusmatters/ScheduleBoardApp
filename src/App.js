import './App.css';
import {Employee} from "./class definitions/employee"
import {findSimilarNameInList, SortedArray} from "./class definitions/sorted-array"
import { useState, useEffect, useContext, useRef} from 'react';
import {createTimeStamp, parseTimeString, simplifiedTimeStampString, chooseRightColor} from './class definitions/helperFunctions';

import AddEmployeeTextFields from './components/AddEmployeeTextFields';
import employeeArray from './class definitions/testEmployeesArray';

import TimeContext from "./components/TimeContext"
import DepartmentMenu from './components/DepartmentMenu';
import EmployeeComponent from './components/EmployeeComponent'

function tempToString(arr){
  let retString ="{";
  for (let element of arr){
    retString = retString + element.toStringSimplified()+", "
  }
  if( retString.length == 1) return "{}";
  return retString.slice(0, retString.length-2) + "}";
}


function App() {
  const {time} = useContext(TimeContext);
  const {intervalSpeed, setIntervalSpeed} = useContext(TimeContext);
  const [employees, setEmployees] = useState(employeeArray);
  const [employeesByDept, setEmployeesByDept] = useState(employees._array);
  const [employeesRendered, setEmployeesRendered] = useState(employeesByDept);
  const [showAddScreen, setShowAddScreen] = useState(false);
  const [showNoEmployeesText, setShowNoEmployeesText] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState(""); // Store last input
  const minSliderValue = 1;  // Slowest (corresponds to highest ms)
  const maxSliderValue = 50; // Fastest (corresponds to lowest ms)
  const minIntervalMs = 6000; // Slowest update (6 seconds)
  const maxIntervalMs = 100;  // Fastest update (0.1 seconds)



  useEffect(()=>{
    searchBarChangeFunction(lastSearchTerm);
  }, [employeesByDept])

  function searchBarChangeFunction(eOrValue) {
    let searchQuery = "";
  
    if (typeof eOrValue === "string") {
      searchQuery = eOrValue; // Directly use the string input
    } else if (eOrValue && eOrValue.target) {
      searchQuery = eOrValue.target.value; // Extract from event object
    }
  
    setLastSearchTerm(searchQuery); // Save last search term
  
    let a = null;
    try {
      a = findSimilarNameInList(searchQuery, employeesByDept);
      if (a.length === 0) {
        setShowNoEmployeesText(true);
      } else {
        setShowNoEmployeesText(false);
        setEmployeesRendered(a);
      }
      console.log(`what names in subPart are similar to ${searchQuery}: ${tempToString(a)}`);
    } catch (err) {
      console.log(err);
      setEmployeesRendered(employeesByDept);
      setShowNoEmployeesText(false);
    }
  }

  const sliderChange = (e) => {
    const sliderValue = Number(e.target.value);
  
    // Reverse map slider range to interval speed
    const newInterval = minIntervalMs - ((sliderValue - minSliderValue) / (maxSliderValue - minSliderValue)) * (minIntervalMs - maxIntervalMs);
  
    setIntervalSpeed(Math.round(newInterval)); // Ensure integer value
  };

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
            <div>store <span className="highlighted">name:</span> 0213-Gaithersburg</div>
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
        <div>
          <label>Update Speed: {intervalSpeed} ms</label>
          <input
            type="range"
            min={minSliderValue}
            max={maxSliderValue}
            step="1"
            value={(maxSliderValue - minSliderValue) * (1 - (intervalSpeed - maxIntervalMs) / (minIntervalMs - maxIntervalMs)) + minSliderValue}
            onChange={sliderChange}
          />
        </div>
        <input onChange={searchBarChangeFunction} className="search-bar" type="search" placeholder="Search For Name"></input>
        {showNoEmployeesText?<div className="error-text">no employees with this name </div>:<></>}
        <DepartmentMenu setEmployeesByDept={setEmployeesByDept} employees={employees}/>
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
          {employeesRendered.map((employee, index) => (
            <EmployeeComponent employee={employee} index ={index} employees={employees} setEmployees={setEmployees} time={time}/>
          ))}
        </div>
        <button onClick={() =>setShowAddScreen(prev => !prev)}>add row</button>
        {showAddScreen ? <AddEmployeeTextFields onSubmit={handleEmployeeSubmit}/> : <></>}
      </div>
  );
}

export default App;