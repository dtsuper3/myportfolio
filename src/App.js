import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none" }} to="/myportfolio">
                Portfolio
              </Link>
            }
            waterfall
          >
            {/*waterfall,scroll*/}
            <Navigation>
              <Link to="/myportfolio/resume">Resume</Link>
              <Link to="/myportfolio/aboutme">About me</Link>
              <Link to="/myportfolio/projects">Projects</Link>
              <Link to="/myportfolio/contacts">Contacts</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none" }} to="/myportfolio">
                Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/myportfolio/resume">Resume</Link>
              <Link to="/myportfolio/aboutme">About me</Link>
              <Link to="/myportfolio/projects">Projects</Link>
              <Link to="/myportfolio/contacts">Contacts</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
