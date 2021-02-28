import React  from 'react';
import './index.css';
import {Link} from "react-router-dom"

function Start() {
    return <>
      <h2 style={{textAlign: 'center', fontSize: '30px'}}>Five functions to fill. One ticking clock. How fast can you code?</h2>
      <button className="start"><Link to="renderer"> Start the game</Link></button>
    </>
  }
  
  export default Start;