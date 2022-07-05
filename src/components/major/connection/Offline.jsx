import React, { Component } from 'react';
import offline from '../../../asset/icon/wifi.svg'

export default class Offline extends Component {
    render() {
        return (
            <div className='flex h-screen bg-[#f9f9f9] text-[#282a2f] dark:text-[#cccbcb] dark:bg-[#10101A] duration-200'>
                <div className='mx-auto my-48 jakarta text-[14px] tracking-wider'>
                    <div className='flex flex-col items-center text-center gap-7'>
                        <div className='pulse-red w-fit p-4 rounded-full'>
                            <img src={offline} alt="" width={22}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='jakarta-500 text-[25px]'>No internet connection found</p>
                            <p>Kindly check your internet connection and try to reconnect.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
