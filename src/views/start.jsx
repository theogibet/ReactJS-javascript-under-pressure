import React, {useEffect}  from 'react';
import './views.css';
import {Link} from "react-router-dom"
import { Button } from 'antd';

function Start({handleStart, handleReset}) {

    useEffect(() => {
      handleReset()
    }, [])

    return <>
      <h2 style={{marginTop: "8%", textAlign: 'center', fontSize: '30px'}}>Five functions to fill. One ticking clock. How fast can you code?</h2>
      <Button onClick={handleStart} type="primary" size="large" style={{ backgroundColor: "#08584D", margin: "auto", display: 'block' }}><Link to="renderer"> Start the game</Link></Button>
    </>
  }
  
  export default Start;