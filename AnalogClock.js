import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteDeg = (360 / 60) * minutes;
  const secondDeg = (360 / 60) * seconds;

  return (
    <div><h1>Analog Clock </h1>
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
        <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      </div>
    </div>
    </div>
  );
};

export default AnalogClock;
