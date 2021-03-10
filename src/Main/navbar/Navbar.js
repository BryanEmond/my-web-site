import { AppBar, Button, Grid, Toolbar, withStyles } from '@material-ui/core';
import React from 'react';

const useStyles = (theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        boxShadow: 'none',
    }
});

class Navbar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" color="transparent" className={classes.appbar}>
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                        <Button color="inherit">About Me</Button>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <Button color="inherit" >Login</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(Navbar);