import { AppBar, Button, Grid, Hidden, IconButton, Link, Menu, MenuItem, Switch, Toolbar, withStyles } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React from 'react';

const useStyles = (theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appbar: {
        boxShadow: 'none',
    },
    checked: {},
    track: {},
    switch_track: {
        backgroundColor: "white",
    },
    switch_base: {
        color: "black",
        "&.Mui-checked": {
            color: "White"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "black",
        }
    },
    switchPadding: {
        paddingLeft: theme.spacing(2),
        display: ''
    },
    switchPaddingAndNone: {
        paddingLeft: theme.spacing(2),
        display: 'none'
    },
});

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
            switchHidden: this.props.classes.switchPadding,
            anchorEl: null,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if (window.scrollY < 65) {
            this.setState({
                switchHidden: this.props.classes.switchPadding
            })
        }
        else {
            this.setState({
                switchHidden: this.props.classes.switchPaddingAndNone
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            checkedA: e.target.checked
        })
    }

    handleClick = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" color="transparent" className={classes.appbar} >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Button color="inherit" component={Link} href="#">Bryan Emond</Button>

                        </Grid>
                        <Grid className={this.state.switchHidden}
                            container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Grid item >fr</Grid>
                            <Grid item>
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange}
                                    name="checkedA"
                                    classes={{
                                        track: classes.switch_track,
                                        switchBase: classes.switch_base,
                                        colorPrimary: classes.switch_primary,
                                    }} />
                            </Grid>
                            <Grid item>eng</Grid>
                        </Grid>
                        <Hidden smDown>
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >

                                <Button color="inherit" component={Link} href="#">About Me</Button>
                                <Button color="inherit" component={Link} href="#project">Project</Button>
                                <Button color="inherit" component={Link} href="#skills">Skills</Button>
                                <Button color="inherit" component={Link} href="#jobs">Jobs</Button>
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <MoreVert />
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchorEl}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>
                                    <Button color="inherit" component={Link} href="#">About Me</Button>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Button color="inherit" component={Link} href="#project">Project</Button>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Button color="inherit" component={Link} href="#skills">Skills</Button>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Button color="inherit" component={Link} href="#jobs">Jobs</Button>
                                </MenuItem>
                            </Menu>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(Navbar);