import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/main.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import { routes } from "./routes/routes";

function App() {
  return (
      <BrowserRouter>
          <div>
              <NavBar />
              <Switch>
                  <Route exact path={routes.home} component={Main}/>
                  <Route exact path={routes.about} component={About} />
                  <Route exact path={routes.contact} component={Contact} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
