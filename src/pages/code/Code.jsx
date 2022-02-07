import React, { Component } from 'react';
import Jokes from '../../components/major/Jokes/Jokes';
import Navbar from '../../components/Navbar';

export default class Code extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className='text_poppins_200 text-14 flex flex-col gap-10 text-gray-300 text-center my-56'>
                    <p>Not available for now</p>
                    <Jokes/>
                </div>
            </>
        )
    }
}
