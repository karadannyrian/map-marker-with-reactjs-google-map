import { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LabelComponent extends Component {
    render() {
        const { value } = this.props
        return (
            <div className="d-flex">
                <div>:</div>
                <label style={{ paddingLeft: 5 }}>
                    {value || '-'}
                </label>
            </div>
        )
    }
}

class ModalDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { data } = this.props
        return (
            <div
                className="modal show"
                style={{ display: 'block', zIndex: 999 }}
            >
                <Modal
                    show={this.props.modalVisible}
                    centered
                    onHide={() => this.props.closeModal()}
                    aria-labelledby="main-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="main-modal">
                            Informasi Detail
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <label className="font-weight-bold">Nama</label>
                                </Col>
                                <Col xs={9}>
                                    <LabelComponent value={data.name} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <label className="font-weight-bold">Kategori</label>
                                </Col>
                                <Col xs={9}>
                                    <LabelComponent value={data.category} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <label className="font-weight-bold">Program</label>
                                </Col>
                                <Col xs={9}>
                                    <LabelComponent value={data.program} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <label className="font-weight-bold">Deskripsi</label>
                                </Col>
                                <Col xs={9}>
                                    <LabelComponent value={data.description} />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default ModalDetail