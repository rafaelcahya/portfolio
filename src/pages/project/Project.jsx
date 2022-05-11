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
            <>
            <div className='bg-[#eceef0] dark:bg-black duration-200 min-h-screen'>
                <Navbar/>
                    <div className='flex flex-col gap-48 py-48'>
                        <CurrentlyProjectNote/>
                        <TabPanel onTabChange={this._handleTabChange}>
                            <div title="Grid view">
                                <UIGridView/>
                            </div>
                            <div title="Timeline view">
                                <div className="timeline-container after:bg-[#E5E7EB] dark:after:bg-[#282a2f]">
                                    <UITimelineView/>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </>
        )
    }
}
