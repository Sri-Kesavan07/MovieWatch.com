import React, { useState, useEffect } from "react";
function DigitalClock() {
  let [time, setTime] = useState(new Date());
  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridien = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridien}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
