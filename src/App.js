import React from "react";
import "./style.scss";
import Home from "./pages/home";
import Artist from './pages/Artist'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/artist' component={Artist}/>
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
