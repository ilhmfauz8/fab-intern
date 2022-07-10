import React from 'react';

import Home from './pages/home';
import Sofadvienna from './pages/sofadvienna';
import Sofadtaylor from './pages/sofadtaylor';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <div>
            <Router>
                <Header />

                <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/sofadvienna' component={Sofadvienna}/>
                <Route path='/sofadtaylor' component={Sofadtaylor}/>
                </Switch>

                <Footer />
            </Router>
        </div>
    )
}

export default App