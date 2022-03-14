import React, { Component } from 'react';
import TabPanel from '../../components/major/tab/TabPanel';
import Topbar from '../../components/major/top bar/Topbar';
import Navbar from '../../components/Navbar';
import CurrentlyProjectNote from './Components/CurrentlyProjectNote';
import UIGridView from './Grid/GridView';
import UITimelineView from './Timeline/TimelineView';

export default class Project extends Component {
    constructor() {
        super()
        this._handleTabChange = this._handleTabChange.bind(this)
    }
    
    _handleTabChange(index) {}

    render() {
        return (
            <>
                <Topbar/>
                <Navbar/>
                <div className='flex flex-col gap-48 my-48'>
                    <CurrentlyProjectNote/>
                    <TabPanel onTabChange={this._handleTabChange}>
                        <div title="Grid view">
                            <UIGridView/>
                        </div>
                        <div title="Timeline view">
                            <div className="timeline-container">
                                <UITimelineView/>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </>
        )
    }
}
