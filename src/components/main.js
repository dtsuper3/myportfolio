import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import Contacts from "./contacts";
import Projects from "./projects";
import Resume from "./resume";
import Aboutme from "./aboutme";

const Main = () => (
  <Switch>
    <Route exact path="/myportfolio" component={Landingpage} />
    <Route path="/myportfolio/aboutme" component={Aboutme} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
