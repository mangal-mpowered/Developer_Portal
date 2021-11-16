import React, { Component } from 'react';
import {  Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PatientAccess from './PatientAccess';
import ProviderDirectory from './ProviderDirectory';

class TrytheAPI extends Component {
    render() {
        return (
            <Router>
                    <div style={{marginLeft:"10%",marginTop:20}}>
                        <div style={{color:'green',fontWeight:"bold"}}>
                            <h1>Try the API</h1>
                        </div>
                        
                        
                            <Nav class="nav nav-tabs" style={{marginTop:20, marginRight:"10%",fontWeight:"bold"}}>
                                <Nav.Link as={Link} to={"/patientAccess"} >Patient Access</Nav.Link>
                                <Nav.Link as={Link} to={"/providerDirectory"} >Provider Directory</Nav.Link>
                            </Nav>
                        
                    </div>
                    <div>
                        <Switch>
                            <Route path="/providerDirectory">
                                <ProviderDirectory/>
                            </Route>
                            <Route path="/">
                                <PatientAccess/>
                            </Route>
                        </Switch>
                    </div>
        </Router>
        );
    }
}

export default TrytheAPI;