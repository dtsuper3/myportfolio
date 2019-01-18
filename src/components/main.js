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
    <Route path="/myportfolio/contacts" component={Contacts} />
    <Route path="/myportfolio/resume" component={Resume} />
    <Route path="/myportfolio/projects" component={Projects} />
  </Switch>
);

export default Main;
