import React from 'react'
import {Employee} from '../class definitions/employee'
import {SortedArray} from "../class definitions/sorted-array"
import {createTimeStamp, parseTimeString, simplifiedTimeStampString, chooseRightColor} from '../class definitions/helperFunctions';

const START_TIME = 0;
const END_TIME = 1;

const EmployeeComponent = ({employee, employeesRendered, employees, setEmployees, time}) => {
    function modifyClockedInStatus(employee){
        employee.isClockedIn= !employee.isClockedIn;
        const updatedEmployees = new SortedArray(Employee);
        updatedEmployees.array = employees.array;
        setEmployees(updatedEmployees);
    }

    function modifyBreak(event, START_OR_END_TIME, typeOfBreak){
        //for time inputs, value will always be empty string unless hour, minute, and am or pm is inputted
        if(event.target.value !== ""){
          let [hours, minutes] = parseTimeString(event.target.value);
          employee[typeOfBreak][START_OR_END_TIME]= createTimeStamp(hours,minutes);
          const updatedEmployees = new SortedArray(Employee);
          updatedEmployees.array = employees.array;
          setEmployees(updatedEmployees);
        }
    }

    function inputTimes(employee, typeOfBreak){
        if((typeOfBreak === "lunch" && employee.hoursDaySeg<=6) || (typeOfBreak === "break2" && employee.hoursDaySeg<6)){
            return (<div className ={`grid-element progress-bar-background ${typeOfBreak} grey`}>XXX</div>)
        }
    
        let breakColors = chooseRightColor(employee, typeOfBreak, time);
        let classThing = `grid-element progress-bar-background ${typeOfBreak} ${breakColors[0]}`;
    
        const lValue = employee[typeOfBreak][START_TIME] === null
        ? <input onBlur={(e) => modifyBreak(e, START_TIME, typeOfBreak)}className= "timeInputsInGridLeft centered-time-content" type= "time" id= {employee.id + typeOfBreak + "Start"}/>
        : <div className="centered-time-content">{simplifiedTimeStampString(employee[typeOfBreak + "StartTime"])}</div>
    
        const rValue = employee[typeOfBreak][END_TIME] === null
        ? <input onBlur={(e) => modifyBreak(e, END_TIME, typeOfBreak)} className= "timeInputsInGridRight centered-time-content" type= "time" id= {employee.id + typeOfBreak + "End"}/>
        : <div className="centered-time-content">{simplifiedTimeStampString(employee[typeOfBreak + "EndTime"])}</div>
    
        return (
            <div className ={classThing}>
            {breakColors[1] !== "none" ?<div className={"progress-bar " + breakColors[1]} style={{width: `${breakColors[2]}%`}}></div>:<></>}
            {lValue}
            <div className="centered-time-content">-</div>
            {rValue}
            </div>
        )
    }

    function checkbox(employee){
      let graphic = employee.isClockedIn ? "checkbox-container green": "checkbox-container grey";
      return <div className = {graphic} onClick={()=>{modifyClockedInStatus(employee)}}></div>
    }

    return (
        <div className ="row-elt" id={employee.id}> 
          <div className= "grid-element tm">/ <button onClick={() => console.log(employee.toString())}>DETAILS</button></div>
          <div className= "grid-element job">{employee.role}</div>
          <div className= "grid-element fullName">
            {employee.fullName} 
            {checkbox(employee)}
          </div>
          <div className= "grid-element hrsDaySeg">{employee.hoursDaySegString} / {employee.hoursDaySegString}</div>
          <div className= "grid-element segStart">{employee.segStartString}</div>
          {inputTimes(employee, "break1")}
          {inputTimes(employee, "lunch")}
          {inputTimes(employee, "break2")}
          <div className= "grid-element segEnd">{employee.segEndString}</div>
          <div className= "grid-element waiver">M1</div>
          <div className= "grid-element duties"></div>
        </div>
    )
}

export default EmployeeComponent
