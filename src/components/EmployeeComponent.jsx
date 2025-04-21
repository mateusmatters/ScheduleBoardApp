import React from 'react'
import {Employee} from '../class definitions/employee'
import {SortedArray} from "../class definitions/sorted-array"
import {createTimeStamp, parseTimeString, simplifiedTimeStampString, chooseRightColor} from '../class definitions/helperFunctions';

const START_TIME = 0;
const END_TIME = 1;



const EmployeeComponent = ({employee, index, employees, setEmployees, time}) => {
    function modifyClockedInStatus(employee){
        employee.isClockedIn= !employee.isClockedIn;
        const updatedEmployees = new SortedArray(Employee);
        updatedEmployees.array = employees.array;
        setEmployees(updatedEmployees);
    }
    function modifyBreak(employee, timeStamp, START_OR_END_TIME, typeOfBreak){
        employee[typeOfBreak][START_OR_END_TIME]= timeStamp
        const updatedEmployees = new SortedArray(Employee);
        updatedEmployees.array = employees.array;
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
        if((typeOfBreak === "lunch" && employee.hoursDaySeg<=6) || (typeOfBreak === "break2" && employee.hoursDaySeg<6)){
            return (<div className ={`grid-element progress-bar-background ${typeOfBreak} grey`}>XXX</div>)
        }
    
        let breakColors = chooseRightColor(employee, typeOfBreak, time);
        let classThing = `grid-element progress-bar-background ${typeOfBreak} ${breakColors[0]}`;
    
        const lValue = employee[typeOfBreak][START_TIME] === null
        ? <input onBlur={(e) => onBlurFunction(e,index, START_TIME, typeOfBreak)}className= "timeInputsInGridLeft centered-time-content" type= "time" id= {index + typeOfBreak + "Start"}/>
        : <div className="centered-time-content">{simplifiedTimeStampString(employee[typeOfBreak + "StartTime"])}</div>
    
        const rValue = employee[typeOfBreak][END_TIME] === null
        ? <input onBlur={(e) => onBlurFunction(e,index, END_TIME, typeOfBreak)}className= "timeInputsInGridRight centered-time-content" type= "time" id= {index + typeOfBreak + "End"}/>
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

    return (
        <div className ="row-elt" id={index}>
          <div className= "grid-element tm">/ <button onClick={() => console.log(employees.array[Number(index)].toString())}>DETAILS</button></div>
          <div className= "grid-element job">{employee.role}</div>
          <div className= "grid-element fullName">
            {employee.fullName} 
            <label className="checkbox-container">
              {employee.isClockedIn ? <input type="checkbox" id="customCheckbox" defaultChecked onClick={()=>{modifyClockedInStatus(employees.array[Number(index)])}}/>: <input type="checkbox" id="customCheckbox" onClick={()=>{modifyClockedInStatus(employees.array[Number(index)])}}/>}
            </label>
          </div>
          <div className= "grid-element hrsDaySeg">{employee.hoursDaySegString} / {employee.hoursDaySegString}</div>
          <div className= "grid-element segStart">{employee.segStartString}</div>
          {inputTimes(employee, index, "break1")}
          {inputTimes(employee, index, "lunch")}
          {inputTimes(employee, index, "break2")}
          <div className= "grid-element segEnd">{employee.segEndString}</div>
          <div className= "grid-element waiver">M1</div>
          <div className= "grid-element duties"></div>
        </div>
    )
}

export default EmployeeComponent
