import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    avatar: {
        margin: 10
    },
    bigAvatar: {
        margin: 10,
        width: 70,
        height: 70
    }
});

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar
                id="av"
                alt="Remy Sharp"
                src="https://lh3.googleusercontent.com/a-/AAuE7mBxHQfIQscfpge31jyUOAmDkxEdgurDvpJbIG3-"
                className={classes.bigAvatar}
            />
        </Grid>
    );
}
