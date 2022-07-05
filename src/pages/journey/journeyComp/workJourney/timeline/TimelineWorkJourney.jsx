import React, { Component } from 'react'
import client from '../../../../../client'
import Loading from '../../../../../components/major/loading/Loading'
import TimelineModelWorkJourney from './TimelineModelWorkJourney'

export class TimelineWorkJourney extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'work'}).then((response) => {
            response.items.sort((a,b) => new Date(a.fields.date) > new Date(b.fields.date) ? -1 : 1);
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <TimelineModelWorkJourney id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <>
                <div className='flex flex-col'>{articles}</div>
            </>
        )
    }
}

export default TimelineWorkJourney