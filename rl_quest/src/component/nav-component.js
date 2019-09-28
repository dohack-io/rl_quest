import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MuseumIcon from '@material-ui/icons/Museum'
import PeopleIcon from '@material-ui/icons/EmojiPeople'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default class LabelBottomNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'all' }
  }
    handleChange = (event, newValue) => {
        this.setState({value: newValue });
        if(this.props.handleChange)
          this.props.handleChange(newValue)
    };

    render() {
    return (
        <BottomNavigation value={this.state.value} onChange={this.handleChange} className={{ width: 500 }}>
            <BottomNavigationAction label="Alle" value="all" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Museen" value="museums" icon={<MuseumIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="People" value="people" icon={<PeopleIcon />} />
        </BottomNavigation>
    );
  }
}
