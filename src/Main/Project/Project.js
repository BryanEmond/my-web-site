import { withStyles } from '@material-ui/core';
import React from 'react';

const useStyles = (theme) => ({
    style: {
        height: `calc(100vh - 64px)`
    }
});

class Project extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.style} id="project">a</div>
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(Project);