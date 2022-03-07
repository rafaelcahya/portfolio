import React, { Component } from 'react';
import client from '../../../client';
import Loading from '../../../components/major/loading/Loading';
import CurrentlyProjectNoteModel from './CurrentlyProjectNoteModel';

export default class CurrentlyProjectNote extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'currentlyProject'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <CurrentlyProjectNoteModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return <>{articles}</>;
    }
}
