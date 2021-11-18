
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

var dummyData = require('./MOCK_DATA.json')

class PatientAccess extends Component {
    
    render() {  
        return (
            <div style={{marginLeft:"10%", marginRight:"10%",marginTop:20}}>
                {dummyData.map((data,index) => (
                    <div>
                        <Accordion defaultActiveKey={0} flush>
                            <Accordion.Item eventKey={index}>
                                
                                <div style={{fontWeight:"bold",color:"#000000"}}>
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
                       </div>
                    ))}
               
            </div>
            
        );
    }
}

export default PatientAccess;