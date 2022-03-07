import React, { Component } from 'react'

export default class Network extends Component {
    render() {
        return (
            <div className='frosted_glass text-14 text-gray-300 text_poppins_200 text-center p-5 letterspacing-1 w-[300px]'>
                {
                    navigator.onLine ? <p className='text-green-400'>Connected to the internet</p> : <p className='text-red-400'>Not connected to the internet</p>
                }    
            </div>
        )
    }
}