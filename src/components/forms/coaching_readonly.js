import React, { useState, useContext, useEffect, Fragment, useRef } from "react";
import {  Button,Card, Form, Row, Col, OverlayTrigger, Tooltip, InputGroup, DropdownButton , Dropdown} from "react-bootstrap"
import { Typeahead, Highlighter } from "react-bootstrap-typeahead";
import "../../App.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle,faUsers } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css"
import { useQuill } from 'react-quilljs';
import {COACHING_SURVEY_PATH} from "../../variables/PathLists";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));
    const Coaching_readonly_page = () => {
        const [team_val_sel , set_team_val_sel] = useState([]);
        const [agent_name , set_agent_name] = useState([]);
        const [coachingStart , setcoachingStart] = useState(new Date());
        const [coachingEnd , setcoachingEnd] = useState(new Date());
        const [activitytype,setActivitytype]=useState('');
        const [attachement, setAttachement] = useState('');
        const [prev_insights, setPrev_insights] = useState('');
        const [strenghts, setStrenghts] = useState('');
        const [kpi1, setKpi1] = useState('');
        const [curr_stand1, setCurr_stand1] = useState('');
        const [goal1, setGoal1] = useState('');
        const [behaviour1, setBehaviour1] = useState('');
        const [channel1, setChannel1] = useState('');
        const [root_cause1, setRoot_cause1] = useState('');
        const [educ_tools1, setEduc_tools1] = useState('');
        const [free1, setFree1] = useState('');
        const [kpi2, setKpi2] = useState('');
        const [curr_stand2, setCurr_stand2] = useState('');
        const [goal2, setGoal2] = useState('');
        const [behaviour2, setBehaviour2] = useState('');
        const [channel2, setChannel2] = useState('');
        const [root_cause2, setRoot_cause2] = useState('');
        const [educ_tools2, setEduc_tools2] = useState('');
        const [free2, setFree2] = useState('');
        const [kpi3, setKpi3] = useState('');
        const [curr_stand3, setCurr_stand3] = useState('');
        const [goal3, setGoal3] = useState('');
        const [behaviour3, setBehaviour3] = useState('');
        const [channel3, setChannel3] = useState('');
        const [root_cause3, setRoot_cause3] = useState('');
        const [educ_tools3, setEduc_tools3] = useState('');
        const [free3, setFree3] = useState('');
        const [other_focus, setOther_focus] = useState('');
        const [smart, setSmart] = useState('');
        const [followup, set_followup_Radio] = useState('');
        const [followdate, setFollowdate] = useState('');
        const [mgr_commit, setMgr_commit] = useState('');
        const [attachment, setAttachment] = useState('');
       
        

    


        const ExampleCustomInput = ({ value, onClick }) => (
            <Button variant="outline-primary" className="example-custom-input" onClick={onClick}>
              {value}
            </Button>
          );



        /* var contentKeys = Object.keys(team_names_arr.content);
        var team_name_val = contentKeys.map((t) => 
                       team_names_arr.content[t].map((e) => (e.team_name))
                       ); */
        const [radioValue, setRadioValue] = useState("")            
        const classes = useStyles();
        const [api_Data_team, setApi_data_team] = useState([]);
        const [api_Data_agent, setApi_data_agent] = useState([]);
        const apiURL_team = "http://localhost:3004/log/";
        const submitAPI = "http://localhost:3004/log/";

        
        // const apiURL = "http://10.120.14.129:5000/get";
        useEffect(() => {
            console.log("Loaded");
            apiCall_team();
        }, []);

        useEffect(() => {
            const temp = api_Data_team.map(obj => obj.attachment);
            //const temp = api_Data_team.filter(obj => obj.id === 2).map(obj => obj.attachment);
            if (temp !== null) {
                // console.log(temp)
                // console.log(temp[0])
                setAttachment(temp[0]);
            }
        }, [api_Data_team]);
        
        /* useEffect(() => {
            console.log("Loaded");
            apiCall_agent();
        }, []); */

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
            data.map((obj) => console.log(obj.activitytype));
            setApi_data_team(data);
            // console.log('here is what i load')
            // console.log(api_Data_team.map(obj => obj.attachment))
             //setAttachment(api_Data_team.map(obj => obj.attachment));
        };

        /* React.useEffect(() => {
            if (quill) {
              quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
            }
          }, [quill]); */

       /*  useEffect(() => {
            apiCall_agent();
        }, [team_val_sel]); */

       /*  const apiCall_agent = async () => {
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
        }; */
/*         useEffect(() => {
            console.log(submitParam);
        }, [coachingStart]);
 */

       /*  const submitCall = async () => {
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

        const handleSelect=(e)=>{
            console.log(e);
            setActivitytype(e)
          }
 */

          const quill_module = {
            toolbar: [ 
                /*[{'header': [1, 2, false]}],
                 ['bold', 'italic', 'underline','strike'],
                [{'color': ['black', '#595959', '#ed343f', '#fcb615', '#02af56', '#a14699', '#00a7df']}],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, 'link'] */
            ]
        };

      useEffect(() => {
          console.log('before');
          console.log(attachment);
          console.log('after')
      }, [attachment]);

      const [somevar, setSomevar] = useState("<p>vattttxyz</p>");
        
      return (
        <Card style={{ padding: '0rem', boxShadow: '0 0 0.7rem 0.3rem rgba(100, 100, 100, 0.2)', width:"100%" }}>
                <Card.Body>
                    <Card.Title>
                        <h1>Coaching Log</h1><br/>
                        
                    </Card.Title>
                        {/* <h4>{team_val_sel} : {session_agenda} : {followup} :{rootcause} </h4> */}

                            <Row>
                            <Col >
                                <Form.Label column sm={8} className="text-center" style={{width: "100%"}}>
                                <span style={{fontSize: 20, fontWeight: "bold"}}>Activity </span> <br/> {api_Data_team.map(obj => obj.activitytype)}
                                </Form.Label>
                                
                                
                                </Col>
                                <Col>
                                    <Form.Label column sm={8} className="text-center" style={{width: "100%"}}>
                                    <span style={{fontSize: 20, fontWeight: "bold"}}>Coaching Start </span><br/>
                                    {api_Data_team.map(obj => obj.coachingStartDatetime)}
                                    </Form.Label>
                                </Col>
                                <Col >
                                <Form.Label column sm={8}className="text-center" style={{width: "100%"}}>
                                    <span style={{fontSize: 20, fontWeight: "bold"}}>Coaching End </span><br/>
                                    {api_Data_team.map(obj => obj.coachingEndDatetime)}
                                    </Form.Label>
                                </Col>
                                
                            </Row>
                            <Row>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Label>
                                    <span style={{fontSize: 20, fontWeight: "bold"}}>Agent Name </span><br/>
                                    {api_Data_team.map(obj => obj.agent_name)}
                                    </Form.Label>
                                </Col>
                            </Row>
                            <br/>
                            <Row> 
                            <Col>
                                <Form.Label>
                                <span style={{fontSize: 20, fontWeight: "bold"}}>Previous Coaching Insights</span><br/>
                                {api_Data_team.map(obj => obj.prev_insights)}
                                </Form.Label>
                                
                            </Col>
                            </Row>
                            <br/>
                            
                            <Row>
                            <Col>
                            <Form.Label>
                                <span style={{fontSize: 20, fontWeight: "bold"}}>Strenghts</span><br/>
                                {api_Data_team.map(obj => obj.strenghts)}
                                </Form.Label>
                            </Col>
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>KPI</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>Current standing</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>Goal</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>AFIs</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>Channel</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>Root Cause</Form.Label>
                            </Col>
                            <Col>
                            <Form.Label className="text-center" style={{width: "100%", fontWeight: "bold"}}>Educ Tools</Form.Label>
                            </Col>
                            </Row>

                            <Row>

                            <Col>       
                                {api_Data_team.map(obj => obj.kpi1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.curr_stand1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.goal1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.behaviour1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.channel1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.root_cause1)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.educ_tools1)}
                            </Col>
                            
                            </Row>

                            <Row>

                            <Col>       
                                {api_Data_team.map(obj => obj.kpi2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.curr_stand2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.goal2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.behaviour2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.channel2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.root_cause2)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.educ_tools2)}
                            </Col>
                            
                            </Row>
                            <Row>

                            <Col>       
                                {api_Data_team.map(obj => obj.kpi3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.curr_stand3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.goal3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.behaviour3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.channel3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.root_cause3)}
                            </Col>
                            <Col>
                                {api_Data_team.map(obj => obj.educ_tools3)}
                            </Col>
                            
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                            
                            <span style={{fontSize: 20 , fontWeight: "bold"} }>Other focus area discussed</span>
                            <br/> 
                            {api_Data_team.map(obj => obj.other_focus)}
                            
                            </Col>
                            
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                            
                            <span style={{fontSize: 20 , fontWeight: "bold"} }>SMART action plan</span> <span style={{color: "gray"}}>Specific | Measurable | Attainable | Relevant | Time Bound</span> 
                            <br></br>
                                {api_Data_team.map(obj => obj.smart)}
                            
                            </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <Row>
                            <Col>
                                <Form.Label as="followup_radio" column sm={4}>
                                <span style={{fontSize: 20 , fontWeight: "bold"} }>Does this need a follow-up?</span>
                                </Form.Label>
                                {api_Data_team.map(obj => obj.followup)}
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Form.Label as="followupdate" column sm={4}>
                                <span style={{fontSize: 20 , fontWeight: "bold"} }>Date:</span>
                                </Form.Label>
                                {api_Data_team.map(obj => obj.followdate)}
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                            <Form.Label as="followupdate" column sm={4}>
                            <span style={{fontSize: 20, fontWeight: "bold"}}>Manager Commitment</span><br/>
                            </Form.Label> <br></br>
                            {api_Data_team.map(obj => obj.mgr_commit)}
                            </Col>
                            </Row>

                            <Form.Group
                                as={Row}
                                controlId="attachment"
                                style={{overflow:'auto', marginTop: '1rem'}}
                                
                            >

                            <Row> 
                            <Col >
                                    <ReactQuill theme='snow'
                                        readOnly={true}
                                        value={attachment || "" }
                                        modules={quill_module}
                                    />
                            </Col>
                            </Row>
                            
                            </Form.Group>  
            <br/>
            <Row>
                <Col md={{ span: 4, offset: 5 }}>
                <Button as={Link} variant="outline-primary" /* onClick={submitCall} */ to={COACHING_SURVEY_PATH}>Acknowledge</Button>{' '}
                </Col>
            </Row>
            <div></div>
        </Card.Body>
        </Card>
      );

    
}
export default Coaching_readonly_page