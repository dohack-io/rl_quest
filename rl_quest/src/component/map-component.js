import React from "react";
import {Map, Marker, Circle, CircleMarker, Tooltip, Popup, TileLayer} from "react-leaflet";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import AvComp from "./avatar-component";

import POI from './poi-component.js'

const center = [51.505, -0.09];
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function MapComp(){
    const [state, setState] = React.useState({
        bottom: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const fullList = side => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <POI name="Joggen gehen" desc="Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf" /> // Temporary
        </div>
    );

        return (
            <Map center={center} zoom={13}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <TileLayer
                    attribution='<a href="https://carto.com/" target="_blank">© CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=kEZmsWQFuMcfFzQOScYa"
                />
                <Marker onClick={toggleDrawer("bottom", true)} position={[51.51, -0.09]}>
                    <SwipeableDrawer
                        disableBackdropTransition={!iOS} disableDiscovery={iOS}
                        anchor="bottom"
                        open={state.bottom}
                        onClose={toggleDrawer('bottom', false)}
                        onOpen={toggleDrawer('bottom', true)}
                    >
                        {fullList("bottom")}
                    </SwipeableDrawer>
                    <Tooltip onClick={toggleDrawer("bottom", true)}>Tooltip for Marker</Tooltip>
                </Marker>
                <AvComp onClick={toggleDrawer("right", true)}  />
            </Map>
        )
}
