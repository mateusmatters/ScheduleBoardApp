// TimeContext.js
import { createContext, useState, useEffect } from 'react';

//this context could be either a time or undefined (in theory it could be anything tho)
//
//when context is called later, you want to be able to provide it to certain components
//to do this, you have to access the provider via <TimeContext.Provider>
//and finally add the value that you would want to pass through (should be some type of state)
const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  //this state of time and setTime is what we would eventually like for lots of children to use
  //we define them here and also make an useEffect to update and handle all that work of updating time here
  //const [time, setTime] = useState(new Date());
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, []);

  //TEST VERSION
  const [time, setTime] = useState(()=>{
    const date = new Date();
    date.setHours(8,30,0,0);
    return date;
  })

  const [intervalSpeed, setIntervalSpeed] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) =>{
        const newTime = new Date(prevTime);
        newTime.setMinutes(newTime.getMinutes()+1);
        return newTime;
      })
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [intervalSpeed]);


  //this uses the context we created above and is allowing any children inside to access the time value we made
  return (
    <TimeContext.Provider value={{time, intervalSpeed, setIntervalSpeed}}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContext;