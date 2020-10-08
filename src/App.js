import React, {Suspense} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Pencil from "./pages/Pencil";
const LaserMain = React.lazy(() => import("./pages/Laser"));

function App() {
    return (
        <Router>
            <Route path={'/'} exact>
                <Main/>
            </Route>
            <Route path={'/laser'}>
                <Suspense fallback={''}>
                    <LaserMain/>
                </Suspense>
            </Route>
            <Route path={'/pencil'}>
                <Pencil/>
            </Route>
        </Router>
    );
}

export default App;
