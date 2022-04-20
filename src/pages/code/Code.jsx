import React, { Component } from 'react';
import Jokes from '../../components/major/Jokes/Jokes';
import Topbar from '../../components/major/top bar/Topbar';
import Navbar from '../../components/Navbar';

export default class Code extends Component {
    render() {
        return (
            <>
                <Topbar/>
                <Navbar/>
                <div className='jakarta text-[14px] flex flex-col gap-10 bg-[#f9f9f9] dark:bg-black text-[#282a2f] dark:text-[#cccbcb] duration-200 h-screen text-center py-48'>
                    <p>Not available for now</p>
                    <Jokes/>
                </div>
            </>
        )
    }
}
