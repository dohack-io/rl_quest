import React from "react";
import {Map, Marker, Circle, CircleMarker, Tooltip, Popup, TileLayer} from "react-leaflet";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import POI from './poi-component.js'

const center = [51.505, -0.09];
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const poiList = [
  {
    name: 'langsam gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.51, -0.09],
    type: 'people'
  },
  {
    name: 'Schlafen gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.61, -0.09],
    type: 'museums'
  },
  {
    name: 'Verstecken spielen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.51, -0.19],
    type: 'people'
  },
  {
    name: 'Trinken gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.51, -0.29],
    type: 'museums'
  },
  {
    name: 'Joggen gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.55, -0.09],
    type: 'people'
  },
]

export default function MapComp(props){
    const [state, setState] = React.useState({});

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const fullList = (side, info) => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <POI name={info.name} desc={info.desc} /> // Temporary
        </div>
    );
    
    let markers = poiList.filter(x => new RegExp(props.filter).test(x.type))
      .map(x => <Marker onClick={toggleDrawer(x.name, true)} position={x.loc}>
                    <SwipeableDrawer
                        disableBackdropTransition={!iOS} disableDiscovery={iOS}
                        anchor="bottom"
                        open={state[x.name]}
                        onClose={toggleDrawer(x.name, false)}
                        onOpen={toggleDrawer(x.name, true)}
                    >
                        {fullList(x.name, x)}
                    </SwipeableDrawer>
                    <Tooltip onClick={toggleDrawer(x.name, true)}>Tooltip for Marker</Tooltip>
                </Marker>)

        return (
            <Map center={center} zoom={13}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <TileLayer
                    attribution='<a href="https://carto.com/" target="_blank">© CARTO</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=kEZmsWQFuMcfFzQOScYa"
                />
                {markers}
            </Map>
        )
}
