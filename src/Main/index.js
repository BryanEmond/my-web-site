import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './navbar';
import Self from './Self';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Route path="/my-web-site" exact component={Self} />
            </Router>
        )
    }
}
export default Main;