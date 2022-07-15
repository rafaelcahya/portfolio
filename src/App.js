import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'
import './style/Font.css'
import './style/Config.css'
import './style/General.css'
import './style/Timeline.css'
import './style/Scrollbar.css'
import 'aos/dist/aos.css';

import Home from './pages/home/Home'
import Project from './pages/project/Project';
import SingleProject from './pages/project/SingleProject';
import Code from './pages/code/Code';
import SingleCode from './pages/code/SingleCode';
import Offline from './components/major/connection/Offline';
import { ThemeProvider } from './components/major/darkmode/ThemeContext'
import Background from './components/major/darkmode/Background'
import Journey from './pages/journey/Journey'

import { Detector } from 'react-detect-offline'

function App() {
    return (
        <ThemeProvider>
            <Background>
                <Detector render={({online}) => (
                    <div>
                        {
                            online && (
                                <Router>
                                    <Switch>
                                        <Route path='/' exact component={Home} />
                                        <Route path="/project" exact component={Project}/>
                                        <Route path="/project/:slug" component={SingleProject}/>
                                        <Route path="/code" exact component={Code}/>
                                        <Route path="/code/:slug" component={SingleCode}/>
                                        <Route path={`/offline/${(Math.random().toString(16)+'00000000000000000').slice(2, 7)}`} component={Offline}/>
                                        <Route path="/journey"  component={Journey}/>
                                    </Switch>
                                </Router>
                            )
                        }
                        {
                            !online && (<Offline/>)
                        }
                    </div>
                )}/>
            </Background>
        </ThemeProvider>
    )
}

export default App