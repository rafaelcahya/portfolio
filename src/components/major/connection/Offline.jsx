import React, { Component } from 'react';
import offline from '../../../asset/icon/wifi.svg'

export default class Offline extends Component {
    handleRefresh = () => {
        window.location.reload()
    };
    render() {
        return (
            <>
                <div className='text_poppins text-14 letterspacing-1 absolute left-1/2 -translate-x-1/2 top-64 text-gray-300'>
                    <div className='flex flex-col gap-7'>
                        <div className='pulse-red w-fit p-2 rounded-full'>
                            <img src={offline} alt="" width={22}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-25'>Are you offline?</p>
                            <p>It seems there is a problem with your connection. Check your network status.</p>
                        </div>
                        <p onClick={this.handleRefresh} className='bg-slate-800 px-3 py-1.5 rounded-md cursor-pointer w-fit'>Refresh</p>
                    </div>
                </div>
            </>
        )
    }
}
