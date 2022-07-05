import React, { Component } from 'react';
import client from '../../client';
import TemporaryPage from '../../components/major/Jokes/TemporaryPage';
import Loading from '../../components/major/loading/Loading';
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
                <Navbar/>
                <TemporaryPage/>
            </>
        )
    }
}
