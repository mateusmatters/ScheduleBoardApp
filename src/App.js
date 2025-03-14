import './App.css';
import {Employee} from "./class definitions/employee"
import {SortedArray} from "./class definitions/sorted-array"
import { useState, useEffect, useContext} from 'react';
import {widthPercentage, createTimeStamp, parseTimeString, percentageOfSeconds, simplifiedTimeStampString, chooseRightBackgroundColor, chooseRightProgressBarColor} from './class definitions/helperFunctions';



import AddEmployeeTextFields from './components/AddEmployeeTextFields';
import employeeArray from './class definitions/testEmployeesArray';

import TimeContext, {TimeProvider} from "./components/TimeContext"

const START_TIME = 0;
const END_TIME = 1;

function App() {
  const {time} = useContext(TimeContext);
  const [employees, setEmployees] = useState(employeeArray);
  const [showAddScreen, setShowAddScreen] = useState(false);

  function handleEmployeeSubmit(firstName, lastName, segStart, segEnd){
    let [hours, mins] = parseTimeString(segStart);
    let [hours2, mins2] = parseTimeString(segEnd);

    const empx = new Employee(firstName, lastName, createTimeStamp(hours,mins), createTimeStamp(hours2,mins2), 5, "Developer");
    const updatedEmployees = new SortedArray(Employee);
    updatedEmployees.array = [...employees.array];
    updatedEmployees.add(empx);
    setEmployees(updatedEmployees);
    console.log("you submitted an employee at the time of : ", time.toLocaleTimeString())
  }

  function modifyBreak(employee, timeStamp, START_OR_END_TIME, typeOfBreak){
    employee[typeOfBreak][START_OR_END_TIME]= timeStamp
    const updatedEmployees = new SortedArray(Employee);
    updatedEmployees.array = employees.array;// O(1) operation
    setEmployees(updatedEmployees);
  }

  function modifyClockedInStatus(employee){
    employee.isClockedIn= !employee.isClockedIn;
    const updatedEmployees = new SortedArray(Employee);
    updatedEmployees.array = employees.array;// O(1) operation
    setEmployees(updatedEmployees);
  }


  function onBlurFunction(event, index, START_OR_END_TIME, typeOfBreak){
    //for time inputs, value will always be empty string unless hour, minute, and am or pm is inputted
    if(event.target.value !== ""){
      let [hours, minutes] = parseTimeString(event.target.value);
      modifyBreak(employees.array[index], createTimeStamp(hours,minutes), START_OR_END_TIME, typeOfBreak)
    }
  }


  function inputTimes(employee, index, typeOfBreak){
    let lValue = <input onBlur={(e) => onBlurFunction(e,index, START_TIME, typeOfBreak)}className= "timeInputsInGridLeft centered-time-content" type= "time" id= {index + typeOfBreak + "Start"}/>;
    let rValue = <input onBlur={(e) => onBlurFunction(e,index, END_TIME, typeOfBreak)}className= "timeInputsInGridRight centered-time-content" type= "time" id= {index + typeOfBreak + "End"}/>;
    if(employee[typeOfBreak][START_TIME] !== null){
      lValue = <div className="centered-time-content">{simplifiedTimeStampString(employee[typeOfBreak + "StartTime"])}</div>
    }
    if(employee[typeOfBreak][END_TIME] !== null){
      rValue = <div className="centered-time-content">{simplifiedTimeStampString(employee[typeOfBreak + "EndTime"])}</div>
    }
    return (
      <>
        {/*If the employee is clocked in, we want to show the progress of their breaks*/}

        {chooseRightProgressBarColor(employee, typeOfBreak, time) !== "none" ?(
          <div className={"progress-bar " + chooseRightProgressBarColor(employee, typeOfBreak, time)} style={{ width: `${widthPercentage(employee, time)}%` }}></div>
          ):(
          <></>
          )
        }

        {lValue}
        <div className="centered-time-content">-</div>
        {rValue}
      </>
    )
  }

  function employeeToHTML(employee, index){
    let tempp = chooseRightBackgroundColor(employee, "break1");
    let classThing = `grid-element break1 progress-bar-background ${tempp}`
    let break1Style = <div className= {classThing}>{inputTimes(employee, index, "break1")}</div>

    tempp = chooseRightBackgroundColor(employee, "lunch");
    classThing = `grid-element lunch progress-bar-background ${tempp}`
    const lunchStyle = employee.hoursDaySeg > 6
    ? <div className={classThing}>{inputTimes(employee, index, "lunch")}</div>
    : <div className="grid-element lunch grey">XXX</div>;



    tempp = chooseRightBackgroundColor(employee, "break2");
    classThing = `grid-element break2 progress-bar-background ${tempp}`
    const break2Style = employee.hoursDaySeg > 6 || employee.hoursDaySeg === 6
    ? <div className={classThing} >{inputTimes(employee, index, "break2")}</div>
    : <div className="grid-element break2 grey">XXX</div>;

    return (
      <div className ="row-elt" id={index}>
        <div className= "grid-element tm">/ <button onClick={() => console.log(employees.array[Number(index)].toString())}>DETAILS</button></div>
        <div className= "grid-element job">{employee.role}</div>
        <div className= "grid-element fullName">
          {employee.fullName} 
          <label className="checkbox-container">
            <input type="checkbox" id="customCheckbox" onClick={()=>{modifyClockedInStatus(employees.array[Number(index)])}}/>
            <div classname="checkbox"></div>
          </label>
        </div>
        <div className= "grid-element hrsDaySeg">{employee.hoursDaySegString} / {employee.hoursDaySegString}</div>
        <div className= "grid-element segStart">{employee.segStartString}</div>
        {break1Style}
        {lunchStyle}
        {break2Style}
        <div className= "grid-element segEnd">{employee.segEndString}</div>
        <div className= "grid-element waiver">M1</div>
        <div className= "grid-element duties"></div>
      </div>
    )
  }
  return (
    <TimeProvider>
      <div className="App">
        <div className="top-page">
          <div>store name</div>
          <div>department</div>
          <div>date</div>
          <div>planned sales</div>
          <div>planned hours</div>
          <div>$/LHR Plan</div>
          <div>Gas Sales</div>
          <div>Sched Hrs</div>
          <div>$/LHR Schd</div>
        </div>
        <h2>{time.getHours()}:{time.getMinutes()}</h2>
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
          {employees.array.map((employee, index) => (
            <>{employeeToHTML(employee, index)}</>
          ))}
          
        </div>
        <button onClick={() =>setShowAddScreen(prev => !prev)}>add row</button>
        {showAddScreen ? <AddEmployeeTextFields onSubmit={handleEmployeeSubmit}/> : <></>}
      </div>
    </TimeProvider>
  );
}

export default App;