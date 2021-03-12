import { Card, CardActions, CardContent, Container, Grid, IconButton, Menu, MenuItem, Typography, withStyles } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { GitHub, Info, LinkOutlined } from '@material-ui/icons';

var imageList = [];

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    style: {
        height: `calc(100vh - 64px)`
    },
    pics: {
        height: '50%',
        width: "100%"
    }
});

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            repositories: []
        }
    }

    componentDidMount() {
        axios
            .get(
                "https://api.github.com/users/BryanEmond/repos"
            )
            .then((repo) => {
                var list = []
                var i = 0;
                repo.data.map(data => {
                    if (data.id === 293757763 || data.id === 346523447 || data.id === 345196095) {
                    } else {
                        list.push({
                            img: imageList[i],
                            id: data.id,
                            name: data.name,
                            html_url: data.html_url,
                            description: data.description,
                            redirect: `/my-web-site/project`
                        })
                        i++;
                    }
                });
                this.setState({
                    repositories: list
                });
            });
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
            <Container id="project" className={classes.style}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <h1>Projects</h1>
                </Grid>
                <Grid container justify="center" spacing={3}>
                    {this.state.repositories.map((data) => (
                        <Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>

                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"

                                    >
                                        <Typography>{data.name}</Typography>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={this.handleClick}
                                        >
                                            <Info />
                                        </IconButton>
                                        <Menu
                                            anchorEl={this.state.anchorEl}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                                            open={Boolean(this.state.anchorEl)}
                                            onClose={this.handleClose}
                                        >
                                            <MenuItem>
                                                <Typography>{data.description}</Typography>
                                            </MenuItem>
                                        </Menu>

                                    </Grid>
                                    <img src={data.img} className={classes.pics} />
                                </CardContent>
                                <CardActions>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"

                                    >
                                        <IconButton href="/project"><LinkOutlined /></IconButton>

                                        <IconButton href={data.html_url}><GitHub /></IconButton>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}
export default withStyles(useStyles, { withTheme: true })(Project);