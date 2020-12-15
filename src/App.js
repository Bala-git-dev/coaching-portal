import React, { useState, useContext, useEffect, Fragment, useRef } from "react";
import { Button, Card, Form, Row, Col, OverlayTrigger, Tooltip, InputGroup } from "react-bootstrap";
import axios from 'axios';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { Button } from '@material-ui/core';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import agoda_logo from './images/agoda-logo-v2.png'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from "react-router";
import './App.css';
import {
    COACHING_FEEDBACK_PATH,
    COACHING_OBSERVATION_PATH,
    COACHING_SATISFACTION_PATH,
    COACHING_READONLY_PATH,
    COACHING_SURVEY_PATH
} from "./variables/PathLists";
import Coaching_feedback from "./components/forms/coaching_feedback.container";
import Coaching_readonly from "./components/forms/coaching_readonly.container";
import Coaching_survey from "./components/forms/coaching_survey.container";
import {team_names} from "./support/team_name.jsx"

class App extends React.Component {
    state = { 
  
        // Initially, no file is selected 
        selectedFile: null
      }; 
       
      // On file select (from the pop up) 
      onFileChange = event => { 
       
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
      }; 
       
      // On file upload (click the upload button) 
      onFileUpload = () => { 
       
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
      }; 
       
      // File content to be displayed after 
      // file upload is complete 
      fileData = () => { 
       
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>{/* Choose before Pressing the Upload button */}</h4> 
            </div> 
          ); 
        } 
      }; 

    
    render() {
      return (

        <div>
            {
                
                    (
                        <Navbar variant="dark" sticky="top" className="bg-agoda">
                            <Navbar.Brand href="/dashboard" className="navbrand-logo">
                                <img src={agoda_logo} alt="Agoda logo v2" />
                                <div className="logo-bottom-curve" />
                            </Navbar.Brand>
                            <Nav className="mr-auto" style={{marginLeft: '7.5rem'}}>
                                <Nav.Link href="http://localhost:3000/">CEG-BI</Nav.Link>
                                <NavDropdown title="SDM Pinboards" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="">Traffic</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="">Shrinkage</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="">Performance</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="">Booking Efficiency</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="KPI Reports" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="">Agent KPI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="">Team KPI</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="">TM KPI</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Survey Forms" id="collapsible-nav-dropdown">
                                       
                                        <NavDropdown.Item href={COACHING_FEEDBACK_PATH}>Coaching Feedback- TM</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_READONLY_PATH}>Coaching Feedback Readonly- Agent</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_SURVEY_PATH}>Coaching Survey- Agent</NavDropdown.Item>
                                    </NavDropdown>
                            </Nav>                           
                        </Navbar>
                    )
            }
            {/* <Router history={hashHistory}>         */}
{/*             <Router>
            <Route path={COACHING_FEEDBACK_PATH} component={coaching_feedback} />        
            <Route path={COACHING_OBSERVATION_PATH} component={coaching_feedback} />
            <Route path={COACHING_SATISFACTION_PATH} component={coaching_feedback} />    
            </Router>  */}
            <Switch>
                <Route component={Coaching_feedback} path={COACHING_FEEDBACK_PATH}  />
                <Route component={Coaching_feedback} path={COACHING_OBSERVATION_PATH}  />
                <Route component={Coaching_survey} path={COACHING_SURVEY_PATH} />
                <Route component={Coaching_readonly} path={COACHING_READONLY_PATH} />
            </Switch> 
            <div className="overlay" />
        </div>

      );
    }
  }

export default App
