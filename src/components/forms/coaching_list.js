import React, { forwardRef ,Component ,useState, useContext, useEffect, Fragment, useRef } from "react";
import {  Button,Card, Form, Row, Col, OverlayTrigger, Tooltip, InputGroup, DropdownButton , Dropdown} from "react-bootstrap"
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle,faUsers } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faSpinner,faPlusCircle,faPlus } from "@fortawesome/free-solid-svg-icons";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import {COACHING_FEEDBACK_PATH} from "../../variables/PathLists";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


const Coaching_list_page = () => {            
      return (
        
        <Card style={{ padding: '0rem', boxShadow: '0 0 0.7rem 0.3rem rgba(100, 100, 100, 0.2)', width:"100%" }}>
            <Card.Body>
                {/* <Card.Title>
                    <h1>Coaching List</h1><br/>
                </Card.Title> */}
                <Row className="justify-content-end">
                            
                            <Col sm={3} style={{textAlign: "right"}}>
                                <Button as={Link} variant="primary" size="md" to={COACHING_FEEDBACK_PATH}>
                                    <FontAwesomeIcon icon={faPlus} size = '1x' />&nbsp;
                                    Create New Coaching
                                </Button>{' '}
                            </Col>
                        </Row> 
                <br/>
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        options={{
          filtering: true,
          actionsColumnIndex: -1
        }}
          columns={[
            { title: 'Coaching ID', field: 'ID' },
            { title: 'Coaching Date', field: 'Date', type: 'date' },
            { title: 'Provider', field: 'Provider' },
            { title: 'Receiver', field: 'Receiver'},
            { title: 'Activity', field: 'Activity'},
            { title: 'Status', field: 'Status'},
            {title: 'Link', field: 'url',render: rowData => <Link to={rowData.url}>Edit</Link>}
          ]}
          data={[{ ID: '145124',Date:"12-11-2020", Provider: 'test', Receiver: 'test1', Activity: 'Review',Status: '',url: '/coaching_feedback_edit/145124'},
          { ID: '145125',Date:"12-08-2020", Provider: 'test2', Receiver: 'test3', Activity: 'Coach',url: '/coaching_feedback_edit/145125'}]}
          title="Coaching list"
          icons={tableIcons}
          actions={[
            {
              icon: "DeleteIcon",
              tooltip: 'Delete Coaching',
              onClick: (event, rowData) => alert("You want to delete " + rowData.ID)
            }
          ]}
        />
      </div> 
            </Card.Body>
        </Card>
      );

    
}
export default Coaching_list_page