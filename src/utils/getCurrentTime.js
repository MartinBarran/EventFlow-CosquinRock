import { useState, useEffect } from 'react';



const getCurrentTime = () =>{
    const currentDate= new Date()         //(2024, 1, 10, 11, 8, 30, 263);
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    return `${currentHour}:${currentMinutes < 10 ? "0" : ""}${currentMinutes}`

}

const usableTime = () =>{
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    const updateCurrentTime = () =>{
        setCurrentTime(getCurrentTime())
    }
    
    useEffect(() => {
        const intervalId = setInterval(updateCurrentTime, 10000); 
        return () => clearInterval(intervalId);
      });

      return currentTime
}

export default usableTime


