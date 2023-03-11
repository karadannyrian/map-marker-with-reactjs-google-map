import { Component } from "react";
import Header from "../components/Header";
import MapView from "../components/MapView";
import SideBarListMarker from "../components/SideBarListMarker";
import ListMarker from "../json/ListMarker.json"
import ListColor from "../json/MD-Color.json"
import ListIcon from "../json/MD-Icon.json"
import ListProgram from "../json/MD-Program.json"
import ListCategory from "../json/MD-Category.json"
import SideBarFormMarker from "../components/SideBarFormMarker";

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapVisible: true,
            modalVisible: false,
            selectedData: null,
            sideBarVisible: window.location.href.includes('show-list') ? 'show-list' : 'add-new-marker',
            lat: -6.914744, lon: 107.609810
        }
    }

    componentDidMount() {
        setTimeout(() => {
            localStorage.setItem('listIcon', JSON.stringify(ListIcon))
            localStorage.setItem('listColor', JSON.stringify(ListColor))
            localStorage.setItem('listCategory', JSON.stringify(ListCategory))
            localStorage.setItem('listProgram', JSON.stringify(ListProgram))
            localStorage.setItem('listMarker', JSON.stringify(ListMarker))
        }, 1);
    }

    render() {
        const { mapVisible, modalVisible, sideBarVisible, lat, lon, selectedData } = this.state
        return (
            <div>
                <Header showSideBar={(val) => this.setState({ sideBarVisible: val })} />
                {mapVisible &&
                    <MapView
                        center={{ lat: lat, lng: lon }}
                        selectedData={selectedData || null}
                        modalVisible={modalVisible || false}
                    />}
                <SideBarListMarker
                    showSideBar={sideBarVisible === 'show-list'}
                    setCenter={(lat, lon, val) => this.setState({ mapVisible: false }, () => {
                        this.setState({ lat, lon, modalVisible: true, selectedData: val }, () => this.setState({ mapVisible: true }))
                    })}
                    hideSideBar={() => {
                        this.setState({ sideBarVisible: null })
                        window.history.replaceState(null, null, '#')
                    }} />
                <SideBarFormMarker
                    showSideBar={sideBarVisible === 'add-new-marker'}
                    hideSideBar={() => {
                        this.setState({ sideBarVisible: null })
                        window.history.replaceState(null, null, '#')
                    }} />
            </div>

        )
    }
}
export default LandingPage