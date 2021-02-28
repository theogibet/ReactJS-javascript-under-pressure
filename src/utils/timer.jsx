import React from 'react';
import useTimer from './usetimer.jsx';
import { formatTime } from './formattime.jsx';
import './timer.css'


const Timer = ({timer}) => {
  return (
    <div className="app">
      <div className='timer'>
        <p>{formatTime(timer)}</p>
        {/* <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div> */}
      </div>
    </div>
  );
}

export default Timer;
