import React, { Component } from 'react';
import { Tab,Nav,Row,Col} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { animateScroll } from 'react-scroll';
var dummyData = require('./MOCK_DATA.json')

class ProviderDirectory extends Component {
    render() {
        return (
            <div style={{marginLeft:"10%",marginRight:"10%", marginTop:20}}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row>
                         <Col sm={3}>
                            <div style={{overflow:"scroll"}}>
                                {dummyData.map((data,index)=>(
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey={index} >{data.first_name}</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                ) )}
                            </div>
                        </Col>
                        <Col sm={9}>
                                <div > 
                                    {dummyData.map((data,index) => (  
                                    
                                        <Tab.Content>
                                            <Tab.Pane eventKey={index}>
                                                <Accordion defaultActiveKey={0} flush>
                                                    <Accordion.Item eventKey={index}>
                                                        
                                                        <div style={{marginTop:0,color:"#020000"}}>
                                                            <Accordion.Header >
                                                                <Button variant="dark">GET </Button>
                                                                /{data.first_name}
                                                            </Accordion.Header>
                                                        </div>
                                                    
                                                        <Accordion.Body>
                                                        {data.paragraph}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                </div>
                            </Col>
                                
                            
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default ProviderDirectory;