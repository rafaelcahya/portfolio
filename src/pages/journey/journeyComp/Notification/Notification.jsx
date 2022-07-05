import React, { Component } from 'react'

export class Notification extends Component {
    render() {
        return (
            <div className='bg-[#ffcc00] text-center py-2 shadow-lg w-full'>
                <p className='jakarta-400 text-[14px] tracking-wide'>Site is currently under construction!</p>
            </div>
        )
    }
}

export default Notification