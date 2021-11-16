import React, { Component } from 'react';
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#">Mpowered Health</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Footer;