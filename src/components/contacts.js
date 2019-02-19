import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Deepak Thapa</h2>
            <img src="https://raw.githubusercontent.com/dtsuper3/myportfolio/master/public/avatar.png" alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{ color:'blue' }}/>
                    <span style={{ fontSize: "22px", fontFamily: "Anton" }}>+918700857683</span>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope" aria-hidden="true" style={{ color:'#fd1' }}/>
                    <span style={{ fontSize: "22px", fontFamily: "Anton" }}>dtsuper3@gmail.com</span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
