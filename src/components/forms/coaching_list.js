import React, { forwardRef ,Component ,useState, useContext, useEffect, Fragment, useRef } from "react";
import {  Button,Card, Form, Row, Col, OverlayTrigger, Tooltip, InputGroup, DropdownButton , Dropdown} from "react-bootstrap"
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle,faUsers } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faSpinner,faPlusCircle,faPlus,fasortalphaup } from "@fortawesome/free-solid-svg-icons";
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

import { Grid } from 'ag-grid-community';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



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
  
  const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
      { ID: '145124',Date:"12/11/2020", Provider: 'test', Receiver: 'test1', Activity: 'Review',Status: 'In Progress',url: '/coaching_feedback_edit/145124'},
      { ID: '145125',Date:"12/08/2020", Provider: 'test2', Receiver: 'test3', Activity: 'Coach',Status: 'Done',url: '/coaching_feedback_edit/145125'}
    ]);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit(); 
    }
    const submitCall = async () => {
      console.log("Submit form");
  };
    const gridOptions = {
      // define 3 columns
      columnDefs: [
          { headerName: 'Coaching ID', field: 'ID' ,
          icons: {
            sortAscending: '<i class="ag ag-sort-alpha-up"/>',
            sortDescending: '<i class="ag ag-sort-alpha-down"/>',
          }},
          { headerName: 'Date', field: 'Date' ,type: ['dateColumn'],
          filterParams: {
            filterOptions: ['inRange', 'greaterThan', 'lessThan'],
            defaultOption: 'inRange',
            buttons: ['apply', 'clear', 'reset'],
            closeOnApply: true
          }
        },
          { headerName: 'Provider', field: 'Provider'},
          { headerName: 'Receiver', field: 'Receiver' },
          { headerName: 'Activity', field: 'Activity', 
            filterParams: {
              filterOptions: ['contains', 'startsWith', 'endsWith'],
              defaultOption: 'startsWith'
            }
          },
          { headerName: 'Status', field: 'Status'},
          { headerName: 'Action', field: 'url',
          cellRenderer: (params) => {
            var link = document.createElement('a');
            link.href = 'http://localhost:3000'+params.data.url;
            link.innerText = "Edit";
           
            return link;
        }},
        { headerName: 'Status', field: 'Status',
        cellRendererFramework: function(params) {
          return <Button onClick={submitCall} variant="primary" size="sm" > <FontAwesomeIcon icon={faTrash} size = '1x' />&nbsp; Delete </Button>
        }}
      ],
      defaultColDef: {
        resizable: true,
        filter: true,
        floatingFilter: false,
        sortable: true
    },
    columnTypes: {
    dateColumn: {
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateParts = cellValue.split('/');
          var day = Number(dateParts[0]);
          var month = Number(dateParts[1]) - 1;
          var year = Number(dateParts[2]);
          var cellDate = new Date(year, month, day);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    }
  }

  }

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
        {/* <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        options={{
          filtering: true,
          search: true,
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
      </div>  */}

      <div className="ag-theme-alpine" style={{ height: 400 , width: '100%' }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                columnDefs={gridOptions.columnDefs}
                defaultColDef={gridOptions.defaultColDef}
                columnTypes={gridOptions.columnTypes}>
            </AgGridReact>
        </div>
            </Card.Body>
        </Card>

        
      );

    
}
export default Coaching_list_page