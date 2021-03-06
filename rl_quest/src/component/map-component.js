import React from "react";
import {Map, Marker, Tooltip, TileLayer} from "react-leaflet";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import AvComp from "./avatar-component";

import POI from './poi-component.js'
import ProfileComp from './profile-component';

const center = [51.5044, 7.52722];
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const poiList = [
  {
    name: 'langsam gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew',
    loc: [51.49, 7.47],
    type: 'people'
  },
  {
    name: 'Schlafen gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.49, 7.51],
    type: 'museums'
  },
  {
    name: 'Verstecken spielen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.29, 7.25],
    type: 'people'
  },
  {
    name: 'Trinken gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.51, 8.01],
    type: 'museums'
  },
  {
    name: 'Joggen gehen',
    desc: 'Eine Runde um den Pott sdfdsfdsf fdsfdfwe fewf ewfe fewf ef ef fef ef ew few fwefewfe fwef efwe fefewf',
    loc: [51.47, 7.46],
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

                <AvComp onClick={toggleDrawer("right", true) }  />
                <SwipeableDrawer
                    disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    anchor="right"
                    open={state.right}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                >
                  <ProfileComp/>
                </SwipeableDrawer>
            </Map>
        )
}
