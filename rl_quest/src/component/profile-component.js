import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AvComp from "./avatar-component";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };





    return (
        <div>
            <div id="profile">
                <div class="zeile" id="bilddiv">
                    <img id="bild"  src="https://lh3.googleusercontent.com/a-/AAuE7mBxHQfIQscfpge31jyUOAmDkxEdgurDvpJbIG3-"></img>
                </div>

                <div class="spalte">
                    <h2>Lvl. 3</h2>
                    <h2>5000 XP</h2>

                    <h3>Max</h3>
                    <h3>Mustermann</h3>
                </div>

                <div className="zeile" >
                    <table>
                        <thead>
                        <tr>
                            <th>Stadt</th>
                            <th>%</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Dortmund</td>
                            <td>85%</td>
                        </tr>
                        <tr>
                            <td>Köln</td>
                            <td>63%</td>
                        </tr>
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}
