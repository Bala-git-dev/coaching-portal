import React, {Component} from 'react'
import Table from './Table'
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
class MyForm extends React.Component {
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
        <form>
          <h1>CEG Coaching Form</h1>
          {/* Form entry Starts */}
          <p>
             <label>Team Name : </label>
             <select id = "myList">
               <option value = "1">Team1</option>
               <option value = "2">Team1</option>
               <option value = "3">Team1</option>
               <option value = "4">Team1</option>
             </select>
          </p>
          <p>Agent's name:</p>
          <input
            type="text"
            placeholder='Type Your name'
          />
          <p>Coaching Start Datetime:</p>
          <input
            type="datetime-local"
           />
           <p>Coaching End Datetime:</p>
          <input
            type="datetime-local"
           />
           <p>
             <label>Team Manager : </label>
             <select id = "myList">
               <option value = "1">Manager1</option>
               <option value = "2">Manager2</option>
               <option value = "3">Manager3</option>
               <option value = "4">Manager4</option>
             </select>
          </p>
            <div>
              <p>Choose the file to upload</p>
                <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Click to Upload! 
                </button> 
                </div> 
                {this.fileData()} 
            </div>
            <h3>Session agenda *</h3> <p>What will we discuss today?</p>
          <input
            type="textarea"
            placeholder='Your answer'
          />
          <h3>Follow up: What was the agent working on since the last coaching session?</h3>
          <input
            type="textarea"
            placeholder='Your answer'
          />
          <h3>Follow up: How effective were the previous action plan?</h3>
          <input
            type="textarea"
            placeholder='Your answer'
          />
          <h3>Is it follow up meeting? *</h3>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              onChange={this.onValueChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.onValueChange}
            />
            No
          </label>
        </div>

    {/* Feedback answers starts */}
        <h2>Coaching Discussion Area #1</h2>

        <h3>Focus area - 1 *</h3>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Daily_Closure"
              checked={this.state.selectedOption === "Daily_Closure"}
              onChange={this.onValueChange}
            />
            Daily Closure
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="CSAT"
              checked={this.state.selectedOption === "CSAT"}
              onChange={this.onValueChange}
            />
            CSAT
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="RITA_Adherence"
              checked={this.state.selectedOption === "RITA_Adherence"}
              onChange={this.onValueChange}
            />
            %RITA Adherence
          </label>
        </div>

        <h3>Leading indicator - 1 *</h3>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="AHT"
              checked={this.state.selectedOption === "AHT"}
              onChange={this.onValueChange}
            />
            AHT
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="AHT - Talk time"
              checked={this.state.selectedOption === "AHT - Talk time"}
              onChange={this.onValueChange}
            />
            AHT - Talk time
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="AHT - Non-Talk time"
              checked={this.state.selectedOption === "AHT - Non-Talk time"}
              onChange={this.onValueChange}
            />
            AHT - Non-Talk time
          </label>
        </div>
        <h3>Root cause - 1 *</h3>
          <input
            type="textarea"
            placeholder='Your answer'
          />
          <h3>TM observation & Agent feedback - 1 *</h3>
          <input
            type="textarea"
            placeholder='Your answer'
          />
          <h3>Recommendations - 1 *</h3>
          <input
            type="textarea"
            placeholder='Your answer'
          />
           <h3>Would you like to follow up in the next session? - 1 *</h3>
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              onChange={this.onValueChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.onValueChange}
            />
            No
          </label>
        </div>

          
          <br/> <br/> <br/>
        <Button color="primary">Submit</Button>

        </form>
        
      );
    }
  }

export default MyForm