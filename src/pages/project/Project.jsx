import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import CurrentlyProjectNote from './Components/CurrentlyProjectNote';
import UIGridView from './Grid/GridView';

export default class Project extends Component {
    render() {
        return (
            <div className='bg-[#f2f2f7] dark:bg-[#10101A] duration-200'>
                <Navbar/>
                <div className='flex flex-col gap-48 py-48'>
                    <CurrentlyProjectNote/>
                    <UIGridView/>
                </div>
            </div>
        )
    }
}
