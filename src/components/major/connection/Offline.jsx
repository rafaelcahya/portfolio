import React, { Component } from 'react';
import offline from '../../../asset/icon/wifi.svg'

export default class Offline extends Component {
    handleRefresh = () => {
        window.location.reload()
    };
    render() {
        return (
            <div className='flex h-screen bg-[#f9f9f9] text-[#282a2f] dark:text-[#cccbcb] dark:bg-black duration-200'>
                <div className='mx-auto my-48 jakarta text-[14px] tracking-wider'>
                    <div className='flex flex-col gap-7'>
                        <div className='pulse-red w-fit p-4 rounded-full'>
                            <img src={offline} alt="" width={22}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-[25px]'>Are you offline?</p>
                            <p>It seems there is a problem with your connection. Check your network status.</p>
                        </div>
                        <p onClick={this.handleRefresh} className='bg-[#cccdd1] dark:bg-[#42464f] duration-200 px-4 py-2 rounded-md cursor-pointer w-fit'>Refresh</p>
                    </div>
                </div>
            </div>
        )
    }
}
