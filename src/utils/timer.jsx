import React from 'react';
import { formatTime } from './formattime.jsx';
import './timer.css'


const Timer = ({timer}) => {
  return (
    <div className="app">
      <div className='timer'>
        <p>{formatTime(timer)}</p>
      </div>
    </div>
  );
}

export default Timer;
