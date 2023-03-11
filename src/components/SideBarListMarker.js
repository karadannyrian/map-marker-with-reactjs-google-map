import { Component } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

class SideBarListMarker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: null,
            listMarker: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ listMarker: JSON.parse(localStorage.getItem('listMarker')) })
        }, 100);
    }

    render() {
        const { listMarker, selectedIndex } = this.state
        return (
            <div>
                <Offcanvas show={this.props.showSideBar} onHide={() => { this.props.hideSideBar() }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>MARKER LIST</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="pb-2">
                            {listMarker && listMarker.map((val, index) => {
                                return (
                                    <ListGroup id={index} defaultActiveKey="#link1">
                                        <ListGroup.Item active={index === selectedIndex} action onClick={() => {
                                            this.props.setCenter(val.lat, val.lon, val)
                                            this.setState({ selectedIndex: index })
                                        }}>
                                            <label>{val?.name || ''}</label>
                                        </ListGroup.Item>
                                    </ListGroup>
                                )
                            })

                            }
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        )
    }
}
export default SideBarListMarker