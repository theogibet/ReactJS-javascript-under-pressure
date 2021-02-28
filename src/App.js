import React, {Component} from "react";
import ReactStopwatch from 'react-stopwatch';
import './App.css'
import Start from "./start.js"
import Renderer from "./renderer.js"
import End from "./End.js"

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
        <Stopwatch></Stopwatch>
          <img alt="logo" style={{position: 'absolute', top: '0px', height: '50px', width: '50px'}} src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5d663c797f5d890001060046/0x0.png">

          </img>
        </div>
        <h1 style={{textAlign: 'center', fontSize: '60px'}} >You can't javascript under pressure</h1>
      </div>
    );
  }
}

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:45:00"
    onCallback={() => console.log('Finish')}
    render={({ formatted }) => {
      return (
        <div>
          <p className="chrono"> {formatted}</p>
        </div>
      );
    }}
  />
);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/renderer" component={Renderer} />
            <Route exact path="/end" component={End} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;