import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Header = () => {

    const headerStyle = {
        paddingTop: 50,
    };

    return (
        <div className="header" style={headerStyle}>
            <h1>Sample React App for Qlik Mashup</h1>
            <ul>
                <li>enigma.js to communicate with Qlik's associative engine</li>
                <li>nebula.js to embed visualization into components</li>
                <li>react-router to navigate between components (different chart types)</li>
                <li>React Context API to share data between components</li>
            </ul>
            <br/>
            <Router>
                <div className="ui secondary pointing menu">
                    <NavLink to="/barchart" activeClassName="active" className="item">Bar Chart</NavLink>
                    <NavLink to="/linechart" activeClassName="active" className="item">Line Chart</NavLink>
                    <NavLink to="/piechart" activeClassName="active" className="item">Pie Chart</NavLink>
                </div>

                <br/>

                <Switch>
                    <Route exact path="/barchart">
                        <BarChart />
                    </Route>
                    <Route path="/linechart">
                        <LineChart />
                    </Route>
                    <Route path="/piechart">
                        <PieChart />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Header;


