import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  Button,
  CardActions,
  CardMenu,
  IconButton
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project #1*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto" }}
            className="card"
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover"
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project #2*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto" }}
            className="card"
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover"
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
            {/*Project #3*/}
          </Card>
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto" }}
            className="card"
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover"
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular.</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJs.</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is MongoDB.</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJs</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <section className="category-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
