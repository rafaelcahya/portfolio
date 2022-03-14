import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './index.css'
import './style/Font.css'
import './style/Config.css'
import './style/General.css'
import './style/Timeline.css'
import './style/Scrollbar.css'
import 'aos/dist/aos.css';

import Home from './pages/home/Home'
import Project from './pages/project/Project';
import Code from './pages/code/Code';
import Event from './pages/event/Event';
import Commit from './components/major/github commit/Commit';
import SingleProject from './pages/project/SingleProject';
import Offline from './components/major/connection/Offline';
import SingleChangelog from './components/major/changelog/single/SingleChangelog';

function App() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <style>{'body { background-color: black; }'}</style>
                </Helmet>
                {
                    navigator.onLine ? (
                        <Router>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path="/project" exact component={Project}/>
                                <Route path="/project/:slug" exact component={SingleProject}/>
                                <Route path="/code" exact component={Code}/>
                                <Route path="/event" exact component={Event}/>
                                <Route path="/project/progress/:slug" exact component={Commit}/>
                                <Route path="/offline" exact component={Offline}/>
                                <Route path="/changelog" exact component={SingleChangelog}/>
                            </Switch>
                        </Router>
                    ) : (<Offline/>)
                }
            </HelmetProvider>
        </>
    )
}

export default App

