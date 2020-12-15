import React, { useState, useContext, useEffect, Fragment, useRef } from "react";
import {  Button,Card, Form, Row, Col, OverlayTrigger, Tooltip, InputGroup, DropdownButton , Dropdown} from "react-bootstrap"
import { Typeahead, Highlighter } from "react-bootstrap-typeahead";

import "../../App.css";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle,faUsers } from "@fortawesome/free-regular-svg-icons";
import { faStar,faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import Rating from "react-rating";
import ReactStars from "react-rating-stars-component";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));
    const Coaching_survey_form = () => {
        const [Q1, setQ1] = useState([]);
        const [Q2, setQ2] = useState([]);
        const [Q3, setQ3] = useState([]);
        const [Q4, setQ4] = useState([]);
        const [Q5, setQ5] = useState([]);
        const [Q6, setQ6] = useState([]);
        const [Q7, setQ7] = useState([]);
        const [Q8, setQ8] = useState([]);
        const [Q9, setQ9] = useState([]);
        const [Q10, setQ10] = useState([]);
        const [Q11, setQ11] = useState([]);
        const [other, setOther] = useState('');
        const [tm_name, setTmname] = useState('');
        

        const submitParam ={
            Q1: Q1,
            Q2: Q2,
            Q3: Q3,
            Q4: Q4,
            Q5: Q5,
            Q6: Q6,
            Q7: Q7,
            Q8: Q8,
            Q9: Q9,
            Q10: Q10,
            Q11: Q11,
            other: other,
            tm_name: tm_name
        }


        const ExampleCustomInput = ({ value, onClick }) => (
            <Button variant="outline-primary" className="example-custom-input" onClick={onClick}>
              {value}
            </Button>
          );

          const ratingChanged = (newRating) => {
            console.log({Q1});
          };



        
        const [api_Data_team, setApi_data_team] = useState([]);
        const [api_Data_agent, setApi_data_agent] = useState([]);
        const apiURL_team = "http://localhost:8000/api/teams/";
        const submitAPI = "http://localhost:3004/survey/";

        
        // const apiURL = "http://10.120.14.129:5000/get";
        useEffect(() => {
            console.log({Q1});
            apiCall_team();
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
                /*[{'header': [1, 2, false]}],
                 ['bold', 'italic', 'underline','strike'],
                [{'color': ['black', '#595959', '#ed343f', '#fcb615', '#02af56', '#a14699', '#00a7df']}],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, 'link'] */
            ]
        };

        /* const fetchData = async () => {
             const response = await axios.get('http://localhost:8000/api/teams/'
             );
            setApi_data(response.data);
        };
 */
        
        //var agent_name_filtered = agent_names_root.agent_names.filter(agent_names => agent_names.team_name=={team_val_sel}).map(filteredAgents => 
           // (filteredAgents.agent_name_full))
        
/*         const handleSelect=(e)=>{
            console.log(e);
            setSingleSelections(e)
        } */
/* 
        useEffect(() => {
            // console.log(team_val_sel[0]);
            console.log(agent_names_root.agent_names
                .filter(agent_name => {
                    console.log(agent_name.team_name);
                    return team_val_sel.includes(agent_name.team_name);
                }))
            // console.log(team_val_sel.includes("Accom - DE"))
        }, [team_val_sel]); */

        // useEffect(() => {
        //     let agent_name_filtered = agent_names_root.agent_names.filter(agent_names => agent_names.team_name={team_val_sel}).map(filteredAgents => 
        //         (filteredAgents.agent_name_full))
        //   });
                 
      return (
        <Card style={{ padding: '0rem', boxShadow: '0 0 0.7rem 0.3rem rgba(100, 100, 100, 0.2)', width:"100%" }}>
                <Card.Body>
                    <Card.Title>
                        <h1>Coaching Survey Form</h1><br/>
                        {/* <small style={{color: "red"}}>All fields with (*) are required</small> */}
                    </Card.Title>
                        {/* <h4>{team_val_sel} : {session_agenda} : {followup} :{rootcause} </h4> */}

                        <Row>
                            <Col>
                            <Form.Label>
                            Thank you for taking your time to provide feedback about the coaching sessions you have received from your team managers (TM). 
                            <br/>
                            Responses will be kept confidential. 
                            </Form.Label>
                            </Col>
                            </Row>
                            <br/>

                            <Row>
                            </Row>
                           
                            <Row>
                                {/* <Col >
                                <Form.Label>
                                Choose Team Name:<span style={{color: "red"}}>*</span>
                                </Form.Label>
                                    <Typeahead
                                        id="team_name_dropdown"
                                        labelKey="team_name"
                                        multiple={false}
                                        //options={team_name_val}
                                        //options={team_names_arr.content.team_names.map(obj => obj.team_name)}
                                        options={api_Data_team.map(obj => obj.teamName)}
                                        onChange={set_team_val_sel}
                                        // onSelect={() => apiCall_agent()}
                                        //onSelect={handleSelect}
                                        placeholder="Select Team"
                                        allowNew={false}
                                        clearButton
                                    />
                                </Col> */}
                                <Col>
                                    <Form.Label>
                                    Choose TM Name:<span style={{color: "red"}}>*</span>
                                    </Form.Label>
                                    <Typeahead
                                        id="tm_name_dropdown"
                                        // labelKey="team_name"
                                        multiple={false}
                                        //options={team_val_sel}
                                        // options={
                                        //     agent_names_root.agent_names
                                        //     .filter(agent_names => team_val_sel.includes(agent_names.team_name))
                                        //     .map(filteredAgents => filteredAgents.agent_name_full)
                                        // }
                                        options={api_Data_agent.map(obj => obj.firstName)}
                                        onChange={setTmname}
                                        placeholder="Select TM Name"
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
                            <Form.Label>
                            Please choose your answer to the statements provided, if you
                            <br/>
                            <span style={{fontWeight: "bold"}}>strongly disagree (1 star), disagree (2 stars), neutral/neither agree or disagree (3 stars), agree (4 stars) or strongly agree (5 stars) </span>
                            </Form.Label>
                            </Col>
                            </Row>
                            <br/>

                            <Row>
                            <Col>
                                <Form.Label>1. My manager explained the purpose and agenda of our 121/coaching sessions. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ1}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>2. My manager focused not just on my areas for improvement, but also the things I did well. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ2}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>

                            <Row>
                            <Col>
                                <Form.Label>3. My manager involved me when discussing options on how to improve my performance. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ3}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>4. We had time to practice the target skills that will improve my performance.</Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ4}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>5. The action plans and goals my manager specific, measurable, achievable, relevant and time-bound. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ5}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>6. I was furnished comprehensive documentation of my coaching session. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ6}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>7. It is clear to me how my manager will support me outside of this coaching session.</Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ7}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>8. Our coaching session was a two-way conversation. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ8}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>9. My manager recognized my strengths and provided encouragement. </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ9}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                                <Form.Label>10. My manager created a safe learning environment.  </Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ10}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>

                            <Row>
                            <Col>
                                <Form.Label>11. Overall, I am satisfied with the recent coaching I received from my TM.</Form.Label>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <ReactStars
                                count={5}
                                onChange={setQ11}
                                size={50}
                                activeColor="#0FA4E9"
                            />
                            </Col>
                            </Row>
                            <br/>

                            <Row> 
                            <Col>
                            <Form.Group controlId="other">
                                <Form.Label>Other Comments</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Your Answer" 
                                onChange={(e) => {
                                    setOther(e.target.value.toString().toLowerCase())
                                }}
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <br/>
                            <Row> 
                            <Col>
                            Thank you for providing us feedback. This will help us improve CEG's coaching culture. Click the "SUBMIT" button below to send your response. 
                            </Col>
                            </Row>
                            <br/>            
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
export default Coaching_survey_form