import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './navbar';
import Project from './Project';
import Self from './Self';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Self/>
                <Project/>
            </Router>
        )
    }
}
export default Main;