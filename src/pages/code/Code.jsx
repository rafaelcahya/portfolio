import React, { Component } from 'react';
import Jokes from '../../components/major/Jokes/Jokes';
import Navbar from '../../components/Navbar';

export default class Code extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className='jakarta text-[14px] flex flex-col gap-10 bg-[#f2f2f7] dark:bg-[#121212] text-[#282a2f] dark:text-[#cccbcb] duration-200 h-screen text-center py-48'>
                    <p>Not available for now</p>
                    <Jokes/>
                </div>
            </>
        )
    }
}
