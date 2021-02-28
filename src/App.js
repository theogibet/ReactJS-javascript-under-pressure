import React, {Component} from "react";
import './App.css'
import Start from "./views/start.jsx"
import Renderer from "./renderer/renderer.jsx"
import End from "./views/end.jsx"
import Timer from './utils/timer.jsx';
import useTimer from './utils/usetimer.jsx';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="line" />
        <div className="logo">
         {/* <Stopwatch></Stopwatch> old stopwatch, replace it by a timer hook*/}
          <img alt="logo" style={{position: 'absolute', top: '0px', height: '50px', width: '50px'}} src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5d663c797f5d890001060046/0x0.png">

          </img>
        </div>
        <h1 style={{textAlign: 'center', fontSize: '60px'}} >You can't javascript under pressure</h1>
      </div>
    );
  }
}


function App() {
  const { timer, handleStart, handlePause, handleReset } = useTimer(0)

  return <>
  <div>
    <Header />
        <Timer timer={timer}/>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Start handleStart={handleStart} handleReset={handleReset}></Start>}/>
            <Route exact path="/renderer" component={Renderer} />
            <Route exact path="/end" render={() => <End handlePause={handlePause} timer={timer}></End>}/>

          </Switch>
        </Router>
  </div>
  </>
}


export default App;