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
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://raw.githubusercontent.com/dtsuper3/myportfolio/master/public/avatar.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Deepak Thapa</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
            <p>
              I'm a web developer.
            </p>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>11232, Doriwalan, Gali no. 4, New Delhi-5, India</p>
            <h5>Phone</h5>
            <p>+918700857683</p>
            <h5>Email</h5>
            <p>dtsuper3@gmail.com</p>
            <h5>Website</h5>
            <a href="http://techgeeky.ooo/" target="_blank" rel="noopener noreferrer">http://techgeeky.ooo/</a>
            <hr style={{ borderTop: "3px solid #033fb2", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName={"P.D.M College of Engineering, Bahadurgarh, Delhi-NCR"}
              schoolDescription={
                "I am doing B.Tech in Computer Science and Engineering.Currently,I am in final year i.e 8 semester.I have got 70% on average upto 6 semester."
              }
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName={"Kailali Multiple Campus, Dhangadhi, Nepal"}
              schoolDescription={
                "I have got 73.2% in 10+2."
              }
            />
            <Education
              startYear={2012}
              endYear={2014}
              schoolName={"Stepping Stone English School, Dhangadhi, Nepal"}
              schoolDescription={
                "I have got 74% in class 10 board."
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Experience jobDescription="Fresher"/>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Programming Skills</h2>
            <Skills skill="HTML5/CSS" progress={80} />
            <Skills skill="JavaScript" progress={90} />
            <Skills skill="React" progress={60} />            
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="PHP" progress={50} />            
            <Skills skill="MySQL" progress={50} />
            <Skills skill="MongoDB" progress={50} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Software Skills</h2>
            <Skills skill="Code Editor :- VS Code, Sublime Text" />
            <Skills skill="Version Control Tool :- Git, Github" />
            <Skills skill="OS :- Window, Linux & Android" />            
            <Skills skill="Office :- Word, Excel & PowerPoint" />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Certification</h2>
            <a href="https://www.coursera.org/account/accomplishments/certificate/2LKRR2JYUXU5" target="_blank" rel="noopener noreferrer">Web Development(coursera)</a>
            <br/>
            <a href="https://www.coursera.org/account/accomplishments/certificate/ZE35DY9L6CDV" target="_blank" rel="noopener noreferrer">Introduction to HTML5</a>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
