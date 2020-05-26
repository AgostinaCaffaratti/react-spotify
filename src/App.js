import React from "react";
import "./style.scss";
import Home from "./pages/home";
import ArtistsList from "./pages/artists-list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FetchProvider } from "./context/fetchContext";
import Artist from "./pages/artist";
import Album from "./pages/album/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <FetchProvider>
            <Route path="/artist/:id" component={Artist} />
            <Route exact path="/artists-list" component={ArtistsList} />
            <Route exact path="/" component={Home} />
            <Route path="/album/:id" component={Album} />
          </FetchProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
