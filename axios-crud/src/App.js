import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        </Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/add" component={Add} />
      </BrowserRouter>
    </>
  );
}

export default App;
