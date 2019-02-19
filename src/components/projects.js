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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              GitHub Finder
            </CardTitle>
            <CardText>
            The app uses github api to fetch github user public profile data. The app shows various user detail like latest five repos,total repository etc
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/frontend-projects/tree/master/Github%20Finder" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/frontend-projects/Github%20Finder/" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>              
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              Tracalorie
            </CardTitle>
            <CardText>
            This is an web app which is used for tracking calorie of various meal.The app uses LocalStorage to persistant the entered data.We can update, delete and clear all the entered data  
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/frontend-projects/tree/master/Tracalorie" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/frontend-projects/Tracalorie/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3*/}
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              Weather App
            </CardTitle>
            <CardText>
            This web app is used to show the weather information.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/frontend-projects/tree/master/Weather%20App" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/frontend-projects/Weather%20App/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4*/}
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              Loan Calculator
            </CardTitle>
            <CardText>
              This web app is used to calculate total loan amount and loan interest.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/frontend-projects/tree/master/Loan%20Calculator" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/frontend-projects/Loan%20Calculator/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 5*/}
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              TaskList
            </CardTitle>
            <CardText>
              TaskList
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/frontend-projects/tree/master/TaskList" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/frontend-projects/TaskList/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 6*/}
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              Particle Form
            </CardTitle>
            <CardText>
            Particle Form
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/particle_form" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>GitHub</a></Button>              
              <Button colored><a href="https://dtsuper3.github.io/particle_form/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              React Store Cart
            </CardTitle>
            <CardText>
              This is a simple shopping cart.The UI is created by using React.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/react-store-cart" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button>              
              <Button colored><a href="https://react-store-cart.netlify.com/" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              Node Chat App
            </CardTitle>
            <CardText>
              A simple web socket application.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/dtsuper3/web-socket-chat" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button>              
              <Button colored><a href="https://tranquil-garden-83622.herokuapp.com/" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>              
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
                background:"#333"             
              }}
            >
              {/*bottom right 15% no-repeat #46B6AC*/}
              URL Shortner
            </CardTitle>
            <CardText>
              A microservice in nodeJs for url shortning.
            </CardText>
            <CardActions border>
              {/* <Button colored><a href="https://github.com/dtsuper3/web-socket-chat" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">GitHub</a></Button>               */}
              <Button colored><a href="https://api-project-url-shortener-microservice.glitch.me/" style={{textDecoration:'none'}} target="_blank" rel="noopener noreferrer">LiveDemo</a></Button>              
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is PHP.</h1>
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
          <Tab>Frontend Projects</Tab>
          <Tab>React</Tab>
          <Tab>NodeJs</Tab>
          {/* <Tab>PHP</Tab> */}
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
