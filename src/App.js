import React from "react";
import "./style.scss";
import Home from "./pages/home";
import ArtistsList from './pages/artists-list'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FetchProvider} from './context/fetchContext'

function App() {
  return (
    <FetchProvider>
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>

        <Route path='/artists-list' component={ArtistsList}/>
     
      </Switch>
      </Router>
    </div>
    </FetchProvider>
  );
}

export default App;
