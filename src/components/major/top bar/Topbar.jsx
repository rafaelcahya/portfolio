import React, { useState } from 'react'
import Changelog from './components/Changelog';
import Network from './components/Network';
import Trend from './components/Trend';

function Topbar() {
    const [openRed, isOpenRed] = useState(false);
    const [openYellow, isOpenYellow] = useState(false);
    const [openGreen, isOpenGreen] = useState(false);

    return (
        <>
            <div className='topbar-content fixed h-10 pl-5 w-full' style={{zIndex: 200}}>
                <div className='flex gap-2'>
                    <p className='bg-red-500 w-3 h-3 rounded-full cursor-pointer' onClick={() => {isOpenRed(!openRed)}}></p>
                    <p className='bg-yellow-500 w-3 h-3 rounded-full cursor-pointer' onClick={() => {isOpenYellow(!openYellow)}}></p>
                    <p className='bg-green-500 w-3 h-3 rounded-full cursor-pointer' onClick={() => {isOpenGreen(!openGreen)}}></p>
                </div>
                <p></p>
            </div>
            <div className={`card fixed top-10 ml-5 ${openRed && 'visible'}`} style={{zIndex: 200}}>
                <Changelog/>
            </div>
            <div className={`card fixed top-10 ml-5 ${openYellow && 'visible'}`} style={{zIndex: 200}}>
                <Trend/>
            </div>
            <div className={`card fixed top-10 ml-5 ${openGreen && 'visible'}`} style={{zIndex: 200}}>
                <Network/>
            </div>
        </>
    )
}

export default Topbar