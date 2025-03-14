import React from 'react'
import { useState, useEffect} from 'react';


const AddEmployeeTextFields = ({onSubmit}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [segStart, setSegStart] = useState("");
    const [segEnd, setSegEnd] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSegStartChange = (e) => {
        setSegStart(e.target.value);
    };
    const handleSegEndChange = (e) => {
        setSegEnd(e.target.value);
    };



    function handleSubmit(e){
        e.preventDefault();
        onSubmit(firstName, lastName, segStart, segEnd);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type= "text" id= "firstName" name="firstName" value ={firstName} onChange= {handleFirstNameChange} placeholder="first name"/>
            <label htmlFor="lastName">Last Name:</label>
            <input type= "text" id= "lastName" name="lastName" value ={lastName} onChange= {handleLastNameChange} placeholder="last name"/>
            <label htmlFor="segStart">Seg Start:</label>
            <input type= "time" id= "segStart" name="segStart" value ={segStart} onChange= {handleSegStartChange}/>
            <label htmlFor="segEnd">Seg End:</label>
            <input type= "time" id= "segEnd" name="segEnd" value ={segEnd} onChange= {handleSegEndChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddEmployeeTextFields
