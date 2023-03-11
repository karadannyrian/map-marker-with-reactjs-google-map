import { Component } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

class StepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: null,
            listColor: JSON.parse(localStorage.getItem('listColor')),
            listIcon: JSON.parse(localStorage.getItem('listIcon')),
            listCategory: JSON.parse(localStorage.getItem('listCategory')),
            listProgram: JSON.parse(localStorage.getItem('listProgram')),
        }
    }

    render() {
        const { listCategory, listProgram } = this.props
        return (
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Participant Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="marker-name">
                    <Form.Label>Marker Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Marker Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="marker-category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                        <option disabled selected>Select Category</option>
                        {listCategory && listCategory.map(val => {
                            return (
                                <option id={val.id} value={val.name}>{val.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="marker-program">
                    <Form.Label>Program</Form.Label>
                    <Form.Select>
                        <option disabled selected>Select Program</option>
                        {listProgram && listProgram.map(val => {
                            return (
                                <option id={val.id} value={val.name}>{val.name}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => this.props.goToStep(1)}>
                    Next
                </Button>
            </Form>
        )
    }
}

class StepTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: null,
            listColor: JSON.parse(localStorage.getItem('listColor')),
            listIcon: JSON.parse(localStorage.getItem('listIcon')),
            listCategory: JSON.parse(localStorage.getItem('listCategory')),
            listProgram: JSON.parse(localStorage.getItem('listProgram')),
        }
    }

    render() {
        const { hoveredIcon } = this.state
        const { listColor, listIcon } = this.props
        return (
            <Form>
                <Form.Group className="mb-3" controlId="marker-category">
                    <Form.Label>Marker Color</Form.Label>
                    <div className="py-2">
                        {listColor && listColor.map(val => {
                            return (
                                <i className="fa fa-circle" style={{ color: val.name || 'grey', cursor: 'pointer', marginRight: 10 }}></i>
                            )
                        })}
                    </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="marker-program">
                    <Form.Label>Marker Icon</Form.Label>
                    <div className="py-2">
                        {listIcon && listIcon.map(val => {
                            return (
                                <i onMouseEnter={() => this.setState({ hoveredIcon: val.name })} className={val.name || 'fa fa-circle'} style={{ border: false === val.name ? 'solid' : '', color: hoveredIcon === val.name ? '#0b5ed7' : 'grey', cursor: 'pointer', marginRight: 10 }}></i>
                            )
                        })}
                    </div>
                </Form.Group>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" type="button" onClick={() => this.props.goToStep(0)}>
                        Back
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </ButtonGroup>

            </Form >
        )
    }
}

class SideBarFormMarker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepIndex: 0,
            selectedIndex: null,
            listColor: JSON.parse(localStorage.getItem('listColor')),
            listIcon: JSON.parse(localStorage.getItem('listIcon')),
            listCategory: JSON.parse(localStorage.getItem('listCategory')),
            listProgram: JSON.parse(localStorage.getItem('listProgram')),
        }
    }

    render() {
        const { stepIndex, listCategory, listColor, listIcon, listProgram } = this.state
        return (
            <div>
                <Offcanvas show={this.props.showSideBar} onHide={() => { this.props.hideSideBar() }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>FORM MARKER</Offcanvas.Title>
                        <div>Step {stepIndex + 1}</div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="pb-2">

                            {stepIndex === 0 &&
                                <StepOne
                                    listCategory={listCategory}
                                    listProgram={listProgram}
                                    goToStep={(stepIndex) => this.setState({ stepIndex })} />}
                            {stepIndex === 1 &&
                                <StepTwo
                                    listColor={listColor}
                                    listIcon={listIcon}
                                    goToStep={(stepIndex) => this.setState({ stepIndex })} />}

                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        )
    }
}
export default SideBarFormMarker