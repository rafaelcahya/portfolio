import React, { Component } from 'react';
import TabPanel from '../../components/major/tab/TabPanel';
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
            <div>
                <Navbar/>
                <div className='flex flex-col gap-48 my-64'>
                    <CurrentlyProjectNote/>
                    <TabPanel onTabChange={this._handleTabChange}>
                        <div title="Timeline view">
                            <div className="timeline-container">
                                <UITimelineView/>
                            </div>
                        </div>
                        <div title="Grid view">
                            <UIGridView/>
                        </div>
                    </TabPanel>
                </div>
            </div>
        )
    }
}
