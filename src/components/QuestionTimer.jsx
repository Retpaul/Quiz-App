import { useState, useEffect } from "react";

export default function QuestionTimer({timeout,onTimeout,mode}) {
  // State is rerendered and update progress bar
  
  const [remainingTime, setRemaningTime] = useState(timeout);

  // Timer that expires after some time and tell parent component when time is up
  useEffect(() => {
   const timer = setTimeout(onTimeout, timeout);

   return ()=>{
    clearTimeout(timer)
   }
  }, [timeout, onTimeout]);

  //To update progress bar using code that updates every couple of milliseconds
  useEffect(() => {
   const timer =  setInterval(() => {
     setRemaningTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return()=>{ clearInterval(timer)}
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>;
}
