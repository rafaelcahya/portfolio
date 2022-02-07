import React, { Component } from 'react';
const oneLinerJoke = require('one-liner-joke');

export default class Jokes extends Component {
    componentDidMount() {
        window.addEventListener('load', this.handleGet);
        }

    componentWillUnmount() { 
        window.removeEventListener('load', this.handleGet)  
    }
    handleGet(){
        const getRandomJoke = oneLinerJoke.getRandomJoke();
        document.getElementById('joke').innerText = getRandomJoke.body;
    }
    render() {
        return (
            <> 
                <div className='flex flex-col items-center gap-2'>
                    <h2 id="joke">Try refreshing the page if you can't find the joke. Note: It is not a joke</h2>
                    <p className='cursor-pointer max-w-max px-5 rounded-lg' onClick={this.handleGet}>Next</p>
                </div>
            </>
        )
    }
}
