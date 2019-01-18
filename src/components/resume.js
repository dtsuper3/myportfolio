import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://raw.githubusercontent.com/dtsuper3/myportfolio/master/public/avatar.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Deepak Thapa</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quis praesentium commodi ratione, sapiente odio unde consectetur
              iste, illum sequi cum minus similique! Sint, nisi?
            </p>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>New Delhi, India</p>
            <h5>Phone</h5>
            <p>+918700857683</p>
            <h5>Email</h5>
            <p>dtsuper3@gmail.com</p>
            <h5>Web</h5>
            <p>deepakthapa.tk</p>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName={"P.D.M College of Engineering"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              }
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName={"Kailali Multiple Campus"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Experience />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="HTML5/CSS" progress={80} />
            <Skills skill="JavaScript" progress={90} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="MySQL" progress={70} />
            <Skills skill="React" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
