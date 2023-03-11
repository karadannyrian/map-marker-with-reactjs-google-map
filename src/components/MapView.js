import { Component } from "react";
import GoogleMapReact from 'google-map-react';
import MapMarker from "./MapMarker";
import ModalDetail from "./ModalDetail";

class MapView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listMarker: [],
            selectedData: this.props.selectedData || null,
            modalVisible: this.props.modalVisible || false
        }
    }

    static defaultProps = {
        // center: { lat: -6.914744, lng: 107.609810 },
        zoom: 13
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ listMarker: JSON.parse(localStorage.getItem('listMarker')) })
        }, 500);
    }

    _onChildClick = (key, childProps) => {
        this.props.onCenterChange([childProps.lat, childProps.lng]);
    }

    render() {
        const { listMarker, modalVisible, selectedData } = this.state
        return (
            <div>
                <div style={{ height: '94vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyAicTGi-CyNJ1qkShmL1-cpunCsS7uTd0k',
                            libraries: ['places']
                        }}
                        // apiKey={"AIzaSyArwJfEEc2U7AtdsXUSoUqdwo1N9oatG9c"}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    // onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
                    // yesIWantToUseGoogleMapApiInternals
                    >
                        {listMarker && listMarker.map((val, index) => {
                            const { lat, lon } = val
                            return (
                                <MapMarker
                                    id={`id-${index}`}
                                    lat={lat}
                                    lng={lon}
                                    markerObject={val}
                                    openModal={() => this.setState({ modalVisible: true, selectedData: val })}
                                    onClick={(key, value) => {
                                    }}
                                />
                            )
                        })}

                    </GoogleMapReact>

                    {modalVisible &&
                        <ModalDetail
                            modalVisible={modalVisible}
                            data={selectedData}
                            closeModal={() => this.setState({ modalVisible: false })} />}

                </div>


            </div >


        );
    }
}
export default MapView