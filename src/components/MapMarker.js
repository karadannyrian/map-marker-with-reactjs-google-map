import { Component } from "react";

class MapMarker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailVisible: false
        }
    }
    static defaultProps = {
        markerObject: {
            id: '',
            name: '',
            category: '',
            program: '',
            description: '',
            icon: null,
            color: null,
            lat: 0,
            lon: 0
        }
    };
    render() {
        const { markerObject } = this.props
        return (
            <div onClick={() => this.props.openModal()} style={{
                color: 'white',
                background: markerObject?.color || 'grey',
                border: 'solid',
                padding: '15px 15px',
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                cursor: 'pointer',
                transform: 'translate(-50%, -50%)'
            }}>
                <i className={markerObject?.icon || 'fa fa-circle'}></i>
            </div>
        )
    }
}

export default MapMarker