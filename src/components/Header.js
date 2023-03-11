import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#">TEST MAP</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#show-list" onClick={() => this.props.showSideBar('show-list')}>Show List</Nav.Link>
                            <Nav.Link href="#add-new-marker" onClick={() => this.props.showSideBar('add-new-marker')}>Add new marker</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Header