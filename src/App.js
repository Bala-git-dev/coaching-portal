import React, {} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import agoda_logo from './images/agoda-logo-v2.png'
import {Route, Switch } from "react-router";
import './App.css';
import {
    COACHING_FEEDBACK_PATH,
    COACHING_OBSERVATION_PATH,
    COACHING_READONLY_PATH,
    COACHING_SURVEY_PATH,
    COACHING_LIST_PATH,
    COACHING_FEEDBACK_EDIT_PATH
} from "./variables/PathLists";
import Coaching_feedback from "./components/forms/coaching_feedback.container";
import Coaching_readonly from "./components/forms/coaching_readonly.container";
import Coaching_survey from "./components/forms/coaching_survey.container";
import Coaching_list from "./components/forms/coaching_list.container";
import Coaching_feedback_edit from "./components/forms/coaching_feedback_edit.container";


class App extends React.Component {
    
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
                                        <NavDropdown.Item href={COACHING_LIST_PATH}>Landing Page</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_FEEDBACK_PATH}>Coaching Feedback- TM</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_READONLY_PATH}>Coaching Feedback Readonly- Agent</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_SURVEY_PATH}>Coaching Survey- Agent</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href={COACHING_FEEDBACK_EDIT_PATH}>Coaching Feedback- TM_Edit</NavDropdown.Item>
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
                <Route component={Coaching_list} path={COACHING_LIST_PATH} />
                <Route component={Coaching_feedback_edit} path={COACHING_FEEDBACK_EDIT_PATH} />
            </Switch> 
            <div className="overlay" />
        </div>

      );
    }
  }

export default App
