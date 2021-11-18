import React, { Component } from 'react';
import { Card, Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div style={{marginLeft:"10%",marginTop:30}}>
                <h2>We provide tools to meet all your data needs</h2>
                <Row>
                <Card style={{ margin:10,width: '18rem' }}>
                    <div style={{marginLeft:"35%",marginTop:10 , alignContent:"center"}}>
                        <img variant="top" src="https://developer.cigna.com/assets/images/api.png" />
                    </div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin:10,width: '18rem' }}>
                    <div style={{marginLeft:"35%",marginTop:10 , alignContent:"center"}}>
                        <img variant="top" src="https://developer.cigna.com/assets/images/api.png" />
                    </div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin:10,width: '18rem' }}>
                    <div style={{marginLeft:"35%",marginTop:10 , alignContent:"center"}}>
                        <img variant="top" src="https://developer.cigna.com/assets/images/api.png" />
                    </div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Row>
            </div>
        );
    }
}

export default Home;