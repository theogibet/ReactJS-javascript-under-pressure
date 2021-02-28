import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { Button } from 'antd';
import useTimer from '../utils/usetimer.jsx';
import './views.css';


function End({handlePause, timer}) {

  useEffect(() => {
    handlePause()
  }, [])

  return <>
    <h2 style={{textAlign: 'center', fontSize: '30px'}}>Well done you complete the test in {timer} seconds !</h2>
    <Button type="primary" size="large" style={{marginTop: "5%", backgroundColor: "#08584D", margin: "auto", display: 'block' }}><Link to="renderer"> Start again</Link></Button>
    
  </>
}

export default End;