//this timer component we forsee using the time variable we made in the time context. 
//we would like to use that context here so we now have to import and use UseContext
import React, {useContext} from 'react'
import TimeContext from './TimeContext';

const Timer = () => {
  const { time } = useContext(TimeContext);

  return <div>The current time is: {time.toLocaleTimeString()}</div>;
};

export default Timer;