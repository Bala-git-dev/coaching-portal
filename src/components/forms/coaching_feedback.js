import React, { useState, useEffect } from "react";
import {  Button,Card, Form, Row, Col} from "react-bootstrap"
import { Typeahead } from "react-bootstrap-typeahead";
import "../../App.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"


    const Coaching_feedback_form = () => {
        const [team_val_sel , set_team_val_sel] = useState([]);
        const [agent_name , set_agent_name] = useState([]);
        const [coachingStart , setcoachingStart] = useState(new Date());
        const [coachingEnd , setcoachingEnd] = useState(new Date());
        const [activitytype,setActivitytype]=useState('');
        const [attachment, setAttachment] = useState('');
        const [prev_insights, setPrev_insights] = useState('');
        const [strenghts, setStrenghts] = useState('');
        const [kpi1, setKpi1] = useState('');
        const [curr_stand1, setCurr_stand1] = useState('');
        const [goal1, setGoal1] = useState('');
        const [behaviour1, setBehaviour1] = useState('');
        const [channel1, setChannel1] = useState('');
        const [root_cause1, setRoot_cause1] = useState('');
        const [educ_tools1, setEduc_tools1] = useState('');
        const [kpi2, setKpi2] = useState('');
        const [curr_stand2, setCurr_stand2] = useState('');
        const [goal2, setGoal2] = useState('');
        const [behaviour2, setBehaviour2] = useState('');
        const [channel2, setChannel2] = useState('');
        const [root_cause2, setRoot_cause2] = useState('');
        const [educ_tools2, setEduc_tools2] = useState('');
        const [kpi3, setKpi3] = useState('');
        const [curr_stand3, setCurr_stand3] = useState('');
        const [goal3, setGoal3] = useState('');
        const [behaviour3, setBehaviour3] = useState('');
        const [channel3, setChannel3] = useState('');
        const [root_cause3, setRoot_cause3] = useState('');
        const [educ_tools3, setEduc_tools3] = useState('');
        const [other_focus, setOther_focus] = useState('');
        const [smart, setSmart] = useState('');
        const [followup, set_followup_Radio] = useState('');
        const [followdate, setFollowdate] = useState(new Date());
        const [mgr_commit, setMgr_commit] = useState('');

       
        const submitParam ={

            activitytype: activitytype,
            coachingStartDatetime: coachingStart,
            coachingEndDatetime: coachingEnd,
            agent_name: agent_name,
            prev_insights: prev_insights,
            strenghts: strenghts,
            kpi1: kpi1,
            curr_stand1: curr_stand1,
            goal1: goal1,
            behaviour1: behaviour1,
            channel1: channel1,
            root_cause1: root_cause1,
            educ_tools1: educ_tools1,
            kpi2: kpi2,
            curr_stand2: curr_stand2,
            goal2: goal2,
            behaviour2: behaviour2,
            channel2: channel2,
            root_cause2: root_cause2,
            educ_tools2: educ_tools2,
            kpi3: kpi3,
            curr_stand3: curr_stand3,
            goal3: goal3,
            behaviour3: behaviour3,
            channel3: channel3,
            root_cause3: root_cause3,
            educ_tools3: educ_tools3,
            other_focus: other_focus,
            smart: smart,
            followup: followup,
            followdate: followdate,
            mgr_commit: mgr_commit,
            attachment: attachment
        }


        const ExampleCustomInput = ({ value, onClick }) => (
            <Button variant="outline-primary" className="example-custom-input" onClick={onClick}>
              {value}
            </Button>
          );
        const [api_Data_team, setApi_data_team] = useState([]);
        const [api_Data_agent, setApi_data_agent] = useState([]);
        const apiURL_team = "http://localhost:8000/api/teams/";
        const submitAPI = "http://localhost:3004/log/";

        
        // const apiURL = "http://10.120.14.129:5000/get";
        useEffect(() => {
            console.log("Loaded");
            apiCall_team();
        }, []);

        useEffect(() => {
            console.log("Loaded");
            apiCall_agent();
        }, []);

        /* useEffect(() => {
            if (radioValue !== 'other') {
                set_focus_Area(radioValue);
            }
        }, [radioValue]); */

        const apiCall_team = async () => {
            console.log("called from apiCall");
            const response = await fetch(apiURL_team,{
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            data.map((obj) => console.log(obj.teamName));
            setApi_data_team(data);
        };

        useEffect(() => {
            apiCall_agent();
        }, [team_val_sel]);

        const apiCall_agent = async () => {
            if (team_val_sel.length > 0) {
                const apiURL_agent= `${apiURL_team}${team_val_sel[0]}/agents/`; 
                console.log("called from apiCall");
                const response = await fetch(apiURL_agent,{
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data);
                data.map((obj) => console.log(obj.firstName));
                setApi_data_agent(data);
            }
        };
        useEffect(() => {
            console.log(submitParam);
        }, [coachingStart]);


        const submitCall = async () => {
            console.log("Submit form");
            const response = await fetch(submitAPI,{
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    submitParam
                )
            });
        };
          const quill_module = {
            toolbar: [ ['image']

            ]
        };

                 
      return (
        <Card style={{ padding: '0rem', boxShadow: '0 0 0.7rem 0.3rem rgba(100, 100, 100, 0.2)', width:"100%" }}>
                <Card.Body>
                    <Card.Title>
                        <h1>Coaching Feedback Form</h1><br/>
                        
                    </Card.Title>
                        

                            <Row>
                            <Col >
                                <Form.Label column sm={6}>
                                Activity <span style={{color: "red"}}>*</span>
                                </Form.Label>
                                
                                <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setActivitytype(e.target.value)}
                                        >
                                            <option value="-99" disabled>Activity Type...</option>
                                            <option value="Coaching">Coaching</option>
                                            <option value="Feedback">Feedback</option>
                                            <option value="Catch up Session">Catch up Session</option>
                                            <option value="Meet and Greet">Meet and Greet</option>
                                            <option value="Catch up Session">Catch up Session</option>
                                            <option value="Career Conversation and Development">Career Conversation and Development</option>
                                            <option value="WFH Safety, Security and Experience">WFH Safety, Security and Experience</option>
                                            <option value="Projects">Projects</option>
                                            <option value="Compliance">Compliance</option>
                                            <option value="Performance Review (MYR/YER)">Performance Review (MYR/YER)</option>
                                            <option value="PIP">PIP</option>
                                </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label column sm={8}>Coaching Start </Form.Label>
                                    <DatePicker
                                        selected={coachingStart}
                                        //popperPlacement="bottom" 
                                        onChange={date => setcoachingStart(date)}
                                        showTimeSelect
                                        //placeholderText="Click to select coaching start time"
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="yyyy-MM-dd H:mm"
                                       customInput={<ExampleCustomInput />}
                                        popperModifiers={{
                                            flip: {
                                                behavior: ['bottom'] // don't allow it to flip to be above
                                            },
                                            preventOverflow: {
                                                enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                            },
                                            hide: {
                                                enabled: false // turn off since needs preventOverflow to be enabled
                                            }
                                        }}

                                    />
                                </Col>
                                <Col >
                                    <Form.Label column sm={8}>Coaching End</Form.Label>
                                    <DatePicker 
                                        selected={coachingEnd}
                                        onChange={date => setcoachingEnd(date)}
                                        showTimeSelect
                                        //placeholderText="Click to select coaching start time"
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="yyyy-MM-dd H:mm"
                                        customInput={<ExampleCustomInput />}
                                        popperModifiers={{
                                            flip: {
                                                behavior: ['bottom'] // don't allow it to flip to be above
                                            },
                                            preventOverflow: {
                                                enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                                            },
                                            hide: {
                                                enabled: false // turn off since needs preventOverflow to be enabled
                                            }
                                        }}
                                    />
                                </Col>
                                <Col >
                                    <Form.Label column sm={1}> </Form.Label>
                                </Col>
                            </Row>
                            <Row>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Label>
                                    Choose Agent Name:<span style={{color: "red"}}>*</span>
                                    </Form.Label>
                                    <Typeahead
                                        id="agent_name_dropdown"
                                        // labelKey="team_name"
                                        multiple={false}
                                        //options={team_val_sel}
                                        // options={
                                        //     agent_names_root.agent_names
                                        //     .filter(agent_names => team_val_sel.includes(agent_names.team_name))
                                        //     .map(filteredAgents => filteredAgents.agent_name_full)
                                        // }
                                        options={api_Data_agent.map(obj => obj.firstName)}
                                        onChange={set_agent_name}
                                        placeholder="Select Agentname"
                                        allowNew={false}
                                        clearButton
                                    />
                                        <Form.Control
                                            style={{display: 'none'}}
                                        />
                                </Col>
                                
                            </Row>
                           
                            <br/>
                            
                            
                            <Row> 
                            <Col>
                            <Form.Group controlId="prev_insights">
                                <Form.Label>Previous Coaching Insights</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setPrev_insights(e.target.value.toString().toLowerCase())
                                }}
                                value={prev_insights}
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                            <Form.Group controlId="strenghts">
                                <Form.Label>Strengths</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setStrenghts(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>KPI</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>Current standing</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>Goal</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>AFIs</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>Channel</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>Root Cause</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%"}}>Educ Tools</Form.Label>
                            </Col>
                            </Row>

                            <Row>

                             <Col>       
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setKpi1(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>KPI</option>
                                            <option value="Closure">Closure</option>
                                            <option value="CSAT">CSAT</option>
                                            <option value="Overall Performance">Overall Performance</option>
                                            <option value="RITA">RITA</option>
                                            <option value="Behavioral KPIs">Behavioral KPIs</option>
                                            <option value="Compliance">Compliance</option>
                                            <option value="Memo Completion">Memo Completion</option>
                                            <option value="Others">Others</option>
                                </Form.Control>
                                </Col>
                                <Col>
                            <Form.Group controlId="curr_stand1">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setCurr_stand1(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="goal1">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setGoal1(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setBehaviour1(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Behaviors</option>
                                            <option value="Behavior 1">Behavior 1</option>
                                            <option value="Behavior 2">Behavior 2</option>
                                            <option value="Behavior 3">Behavior 3</option>
                                            <option value="Behavior 4">Behavior 4</option>
                                            <option value="Behavior 5">Behavior 5</option>
                                            <option value="Behavior 6">Behavior 6</option>
                                            <option value="Behavior 7">Behavior 7</option>
                                            <option value="Behavior 8">Behavior 8</option>
                                            <option value="Behavior 9">Behavior 9</option>
                                            <option value="Behavior 10">Behavior 10</option>
                                            <option value="Behavior 11">Behavior 11</option>
                                            <option value="Behavior 12">Behavior 12</option>
                                            <option value="Behavior 13">Behavior 13</option>
                                            <option value="Behavior 14">Behavior 14</option>
                                            <option value="Behavior 15">Behavior 15</option>
                                            <option value="Behavior 16">Behavior 16</option>
                                            <option value="Behavior 17">Behavior 17</option>
                                            <option value="Behavior 18">Behavior 18</option>
                                            <option value="Behavior 19">Behavior 19</option>
                                            <option value="Behavior 20">Behavior 20</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setChannel1(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Channel</option>
                                            <option value="Voice">Voice</option>
                                            <option value="e-Mail">e-Mail</option>
                                            <option value="Chat">Chat</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setRoot_cause1(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Root Cause</option>
                                            <option value="Knowledge">Knowledge</option>
                                            <option value="Skill">Skill</option>
                                            <option value="Attitude/Motivation">Attitude/Motivation</option>
                                            <option value="Feedback">Feedback</option>
                                            <option value="Environment">Environment</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setEduc_tools1(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Educ Tools</option>
                                            <option value="Skill Transfer">Skill Transfer</option>
                                            <option value="Set Expectation">Set Expectation</option>
                                            <option value="Connection Session">Connection Session</option>
                                            <option value="Set Goals">Set Goals</option>
                                            <option value="Call Listening (Model)">Call Listening (Model)</option>
                                            <option value="Side by Side">Side by Side</option>
                                            <option value="Roleplay">Roleplay</option>
                                            <option value="Analogy">Analogy</option>
                                            <option value="Visuals">Visuals</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="Call Listening (Own Call)">Call Listening (Own Call)</option>
                                            <option value="Perfect Demonstration">Perfect Demonstration</option>
                                            <option value="Group Coaching">Group Coaching</option>
                                            <option value="Best Practice Sharing">Best Practice Sharing</option>
                                            <option value="Walkthrough">Walkthrough</option>
                            </Form.Control>
                            </Col>
                            
                            </Row>

                            <Row>
                            <Col>       
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setKpi2(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>KPI</option>
                                            <option value="Closure">Closure</option>
                                            <option value="CSAT">CSAT</option>
                                            <option value="Overall Performance">Overall Performance</option>
                                            <option value="RITA">RITA</option>
                                            <option value="Behavioral KPIs">Behavioral KPIs</option>
                                            <option value="Compliance">Compliance</option>
                                            <option value="Memo Completion">Memo Completion</option>
                                            <option value="Others">Others</option>
                                </Form.Control>
                                </Col>
                                <Col>
                            <Form.Group controlId="curr_stand2">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setCurr_stand2(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="goal2">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setGoal2(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setBehaviour2(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Behaviors</option>
                                            <option value="Behavior 1">Behavior 1</option>
                                            <option value="Behavior 2">Behavior 2</option>
                                            <option value="Behavior 3">Behavior 3</option>
                                            <option value="Behavior 4">Behavior 4</option>
                                            <option value="Behavior 5">Behavior 5</option>
                                            <option value="Behavior 6">Behavior 6</option>
                                            <option value="Behavior 7">Behavior 7</option>
                                            <option value="Behavior 8">Behavior 8</option>
                                            <option value="Behavior 9">Behavior 9</option>
                                            <option value="Behavior 10">Behavior 10</option>
                                            <option value="Behavior 11">Behavior 11</option>
                                            <option value="Behavior 12">Behavior 12</option>
                                            <option value="Behavior 13">Behavior 13</option>
                                            <option value="Behavior 14">Behavior 14</option>
                                            <option value="Behavior 15">Behavior 15</option>
                                            <option value="Behavior 16">Behavior 16</option>
                                            <option value="Behavior 17">Behavior 17</option>
                                            <option value="Behavior 18">Behavior 18</option>
                                            <option value="Behavior 19">Behavior 19</option>
                                            <option value="Behavior 20">Behavior 20</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setChannel2(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Channel</option>
                                            <option value="Voice">Voice</option>
                                            <option value="e-Mail">e-Mail</option>
                                            <option value="Chat">Chat</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setRoot_cause2(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Root Cause</option>
                                            <option value="Knowledge">Knowledge</option>
                                            <option value="Skill">Skill</option>
                                            <option value="Attitude/Motivation">Attitude/Motivation</option>
                                            <option value="Feedback">Feedback</option>
                                            <option value="Environment">Environment</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setEduc_tools2(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Educ Tools</option>
                                            <option value="Skill Transfer">Skill Transfer</option>
                                            <option value="Set Expectation">Set Expectation</option>
                                            <option value="Connection Session">Connection Session</option>
                                            <option value="Set Goals">Set Goals</option>
                                            <option value="Call Listening (Model)">Call Listening (Model)</option>
                                            <option value="Side by Side">Side by Side</option>
                                            <option value="Roleplay">Roleplay</option>
                                            <option value="Analogy">Analogy</option>
                                            <option value="Visuals">Visuals</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="Call Listening (Own Call)">Call Listening (Own Call)</option>
                                            <option value="Perfect Demonstration">Perfect Demonstration</option>
                                            <option value="Group Coaching">Group Coaching</option>
                                            <option value="Best Practice Sharing">Best Practice Sharing</option>
                                            <option value="Walkthrough">Walkthrough</option>
                            </Form.Control>
                            </Col>
                            
                            </Row>
                            <Row>
                            <Col>       
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setKpi3(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>KPI</option>
                                            <option value="Closure">Closure</option>
                                            <option value="CSAT">CSAT</option>
                                            <option value="Overall Performance">Overall Performance</option>
                                            <option value="RITA">RITA</option>
                                            <option value="Behavioral KPIs">Behavioral KPIs</option>
                                            <option value="Compliance">Compliance</option>
                                            <option value="Memo Completion">Memo Completion</option>
                                            <option value="Others">Others</option>
                                </Form.Control>
                                </Col>
                                <Col>
                            <Form.Group controlId="curr_stand3">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setCurr_stand3(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group controlId="goal3">
                                
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setGoal3(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setBehaviour3(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Behaviors</option>
                                            <option value="Behavior 1">Behavior 1</option>
                                            <option value="Behavior 2">Behavior 2</option>
                                            <option value="Behavior 3">Behavior 3</option>
                                            <option value="Behavior 4">Behavior 4</option>
                                            <option value="Behavior 5">Behavior 5</option>
                                            <option value="Behavior 6">Behavior 6</option>
                                            <option value="Behavior 7">Behavior 7</option>
                                            <option value="Behavior 8">Behavior 8</option>
                                            <option value="Behavior 9">Behavior 9</option>
                                            <option value="Behavior 10">Behavior 10</option>
                                            <option value="Behavior 11">Behavior 11</option>
                                            <option value="Behavior 12">Behavior 12</option>
                                            <option value="Behavior 13">Behavior 13</option>
                                            <option value="Behavior 14">Behavior 14</option>
                                            <option value="Behavior 15">Behavior 15</option>
                                            <option value="Behavior 16">Behavior 16</option>
                                            <option value="Behavior 17">Behavior 17</option>
                                            <option value="Behavior 18">Behavior 18</option>
                                            <option value="Behavior 19">Behavior 19</option>
                                            <option value="Behavior 20">Behavior 20</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setChannel3(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Channel</option>
                                            <option value="Voice">Voice</option>
                                            <option value="e-Mail">e-Mail</option>
                                            <option value="Chat">Chat</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setRoot_cause3(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Root Cause</option>
                                            <option value="Knowledge">Knowledge</option>
                                            <option value="Skill">Skill</option>
                                            <option value="Attitude/Motivation">Attitude/Motivation</option>
                                            <option value="Feedback">Feedback</option>
                                            <option value="Environment">Environment</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control
                                            as="select"
                                            defaultValue="-99"
                                            onChange={(e) => setEduc_tools3(e.target.value)}
                                            /* onBlur={() => setTouched({...touched, alertType: true})} */
                                            /* isInvalid={touched.alertType && Boolean(errorText.missingAlertType)} */
                                        >
                                            <option value="-99" disabled>Educ Tools</option>
                                            <option value="Skill Transfer">Skill Transfer</option>
                                            <option value="Set Expectation">Set Expectation</option>
                                            <option value="Connection Session">Connection Session</option>
                                            <option value="Set Goals">Set Goals</option>
                                            <option value="Call Listening (Model)">Call Listening (Model)</option>
                                            <option value="Side by Side">Side by Side</option>
                                            <option value="Roleplay">Roleplay</option>
                                            <option value="Analogy">Analogy</option>
                                            <option value="Visuals">Visuals</option>
                                            <option value="Simulation">Simulation</option>
                                            <option value="Call Listening (Own Call)">Call Listening (Own Call)</option>
                                            <option value="Perfect Demonstration">Perfect Demonstration</option>
                                            <option value="Group Coaching">Group Coaching</option>
                                            <option value="Best Practice Sharing">Best Practice Sharing</option>
                                            <option value="Walkthrough">Walkthrough</option>
                            </Form.Control>
                            </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                            <Form.Group controlId="other_focus">
                                <Form.Label>Other focus area discussed</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setOther_focus(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                            <Form.Group controlId="smart">
                                <Form.Label>SMART action plan <span style={{color: "gray"}}>Specific | Measurable | Attainable | Relevant | Time Bound</span></Form.Label>
                                <Form.Control type="text" placeholder="Your Answer"
                                onChange={(e) => {
                                    setSmart(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Form.Label as="followup_radio" column sm={4}>
                                Does this need a follow-up?
                                </Form.Label>
                                    <Form.Check
                                    type="radio"
                                    inline label="Yes"
                                    name="followupRadios"
                                    id="followupRadios1"
                                    value="yes"
                                    onChange={(e) => set_followup_Radio(e.target.value)}
                                    defaultChecked={true}
                                    />
                                    <Form.Check
                                    type="radio"
                                    inline label="No"
                                    name="followupRadios"
                                    id="followupRadios2"
                                    value="no"
                                    onChange={(e) => set_followup_Radio(e.target.value)}
                                />
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label column sm={4}> Date : </Form.Label>
                                    <DatePicker
                                        selected={followdate}
                                        onChange={date => setFollowdate(date)}
                                        customInput={<ExampleCustomInput />}
                                    />
                                </Col> 
                            </Row>
                            <Row>
                            <Col>
                            <Form.Group controlId="mgr_commit">
                                <Form.Label column sm={4}>Manager Commitment </Form.Label>
                                <Form.Control type="text" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setMgr_commit(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            </Row>

                            <Form.Group
                                as={Row}
                                controlId="attachment"
                                style={{overflow:'auto', marginTop: '1rem'}}
                                
                            >

                            <Row> 
                            
                            <Col >
                            <Form.Label column sm={4}>Screenshots </Form.Label>
                                    <ReactQuill theme='snow' 
                                        modules={quill_module}
                                        onChange={(e) => setAttachment(e)}
                                        placeholder= "Press ctrl+v to paste the image or use the above image icon to attach an image file."
                                    />
                            </Col></Row>
                            </Form.Group>
            
            <Row>
                <Col md={{ span: 4, offset: 5 }}>
                <Button variant="outline-primary" onClick={submitCall}>Submit</Button>{' '}
                </Col>
            </Row>
            <div></div>
        </Card.Body>
        </Card>
      );

    
}
export default Coaching_feedback_form