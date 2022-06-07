import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import CurrentlyProjectNote from './Components/CurrentlyProjectNote';
import UIGridView from './Grid/GridView';

export default class Project extends Component {
    constructor() {
        super()
        this._handleTabChange = this._handleTabChange.bind(this)
    }
    
    _handleTabChange(index) {}

    render() {
        return (
            <>
            <div className='bg-[#f2f2f7] dark:bg-[#121212] duration-200 min-h-screen'>
                <Navbar/>
                    <div className='flex flex-col gap-48 py-48'>
                        <CurrentlyProjectNote/>
                        <UIGridView/>
                    </div>
                </div>
            </>
        )
    }
}
