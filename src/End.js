import React  from "react";
import {Link} from "react-router-dom";
import './index.css';


function End() {
  return <>
    <h2 style={{textAlign: 'center', fontSize: '30px'}}>Well done you complete the test </h2>
    <button className="start"><Link to="renderer">Start Again</Link></button>
  </>
}

export default End;