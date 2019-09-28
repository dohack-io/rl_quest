import React from "react";
import {Map, Marker, Circle, CircleMarker, Tooltip, Popup, TileLayer} from "react-leaflet";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const center = [51.505, -0.09];

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
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

        return (
            <Map center={center} zoom={13}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker onClick={toggleDrawer("bottom", true)} position={[51.51, -0.09]}>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={state.bottom}
                        onClose={toggleDrawer('bottom', false)}
                        onOpen={toggleDrawer('bottom', true)}
                    >
                        {fullList("bottom")}
                    </SwipeableDrawer>
                    <Tooltip onClick={toggleDrawer("bottom", true)}>Tooltip for Marker</Tooltip>
                </Marker>
            </Map>
        )
}
