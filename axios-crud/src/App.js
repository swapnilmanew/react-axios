import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inde} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
