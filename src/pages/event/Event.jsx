import React, { Component } from 'react';
import client from '../../client';
import Loading from '../../components/major/loading/Loading';
import Topbar from '../../components/major/top bar/Topbar';
import Navbar from '../../components/Navbar';

import EventModel from './EventModel';

export default class Event extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'event'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <EventModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <>
                <Topbar/>
                <Navbar/>
                <div className='bg-[#eceef0] text-[#282a2f] dark:text-[#cccbcb] dark:bg-black duration-200 min-h-screen py-48'>
                    <div className="timeline-container after:bg-[#E5E7EB] dark:after:bg-[#282a2f] duration-200">
                        {articles}
                    </div>
                </div>
                
            </>
        )
    }
}
