import { Avatar, Container, Grid, withStyles } from '@material-ui/core';
import React from 'react';
import me from '../../image/me.png';

const useStyles = (theme) => ({
    style: {
        height: `calc(100vh - 64px)`,
    },
    avatar: {
        height: theme.spacing(25),
        width: theme.spacing(25),
    },
    imgGrid: {
        paddingTop: theme.spacing(5),
    },
    image: {
        height: theme.spacing(65),
        transform: 'translate(2%, 2%)',
    }
});


class Self extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.style}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.imgGrid}
                >
                    <Avatar alt="Me" className={classes.avatar}>
                        <img src={me} alt="mepic" className={classes.image} />
                    </Avatar>
                    <h1>About Me</h1>
                    a
                </Grid>
            </Container >
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(Self);