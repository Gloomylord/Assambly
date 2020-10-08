import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Main from "./pages/Main";
import LaserMain from "./pages/Laser";

function App() {
    return (
        <Router>
            <Route path={'/'} exact>
                <Main/>
            </Route>
            <Route path={'/laser'}>
                <LaserMain/>
            </Route>
        </Router>
    );
}

export default App;
