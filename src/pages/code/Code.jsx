import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import CodeList from '../code/code list/CodeList';

export default class Code extends Component {
    render() {
        return (
            <>
                <div className='h-screen duration-200'>
                    <Navbar/>
                    <CodeList/>
                </div>
            </>
        )
    }
}
