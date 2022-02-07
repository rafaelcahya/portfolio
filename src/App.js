import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './index.css'
import './style/Font.css'
import './style/Config.css'
import './style/General.css'
import './style/Timeline.css'
import './style/Scrollbar.css'

import Home from './pages/home/Home'
import Project from './pages/project/Project';
import Code from './pages/code/Code';
import Event from './pages/event/Event';
import Commit from './components/major/github commit/Commit';
import SingleProject from './pages/project/SingleProject';

function App() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <style>{'body { background-color: black; }'}</style>
                </Helmet>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path="/project" exact component={Project}/>
                        <Route path="/project/:slug" exact component={SingleProject}/>
                        <Route path="/code" exact component={Code}/>
                        <Route path="/event" exact component={Event}/>
                        <Route path="/project/progress/:slug" exact component={Commit}/>
                    </Switch>
                </Router>
            </HelmetProvider>
        </>
    )
}

export default App

