import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './navbar';
import Project from './Project';
import ProjectPage from './ProjectPage';
import Self from './Self';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/my-web-site" exact component={Navbar}/>
                <Route path="/my-web-site" exact component={Self}/>
                <Route path="/my-web-site" exact component={Project}/>
                <Route path="/my-web-site/Project" component={ProjectPage}/>
                 
            </Router>
        )
    }
}
export default Main;