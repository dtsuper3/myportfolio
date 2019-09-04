import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML | CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB
              </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://linkedin.com/in/deepak-thapa-381647148/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*Github*/}
                <a
                  href="https://github.com/dtsuper3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*FreeCodeCamp*/}
                <a
                  href="https://www.freecodecamp.org/dtsuper3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                {/*Twitter*/}
                <a
                  href="https://twitter.com/Deepak13307717"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
