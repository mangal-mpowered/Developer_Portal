import React,{ Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Documentation from "./Documentation";
import Home from "./Home";
import Sandbox from "./Sandbox";
import TrytheAPI from "./TrytheAPI";

export default class Header extends Component{
    render(){
        return(
            <Router>
                <div style={{fontWeight:"bold",fontSize:22}}>

                    <div style={{marginLeft:"10%"}}>
                        <img  height="80" width="80" src="data:image/jpeg;base64,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"/>
                        <h3 style={{display:"inline-block",color:"#495057"}}>| Developer</h3>
                    </div>
                    <Navbar bg="light" variant="light">
                        <Container>
                        <Nav className="me-auto" >
                        <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/documentation"} >Documentation</Nav.Link>
                        <Nav.Link as={Link} to={"/trytheapi"} >Try the API</Nav.Link>
                        <Nav.Link as={Link} to={"/sandbox"} >Sandbox</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
				<div>
					<Switch>
						<Route path="/documentation">
							<Documentation/>
						</Route>
						<Route path="/trytheapi">
							<TrytheAPI/>
						</Route>
						<Route path="/sandbox">
							<Sandbox/>
						</Route>
						<Route path="/">
							<Home/>
						</Route>
					</Switch>
				</div>
            </Router>
        )
    }
}