import React, { Component } from 'react'
import client from '../../../../client';
import ModelProjectJourney from './ModelProjectJourney';

export class ProjectJourney extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    componentDidMount() { 
        client.getEntries({content_type: 'project'}).then((response) => {
            response.items.sort((a,b) => new Date(a.fields.date) > new Date(b.fields.date) ? -1 : 1);
            this.setState({articles: response.items})
        })
    }
    render() {
        const articles = this.state.articles.map((article, i) => <ModelProjectJourney id={i} key={i} article={article}/>)
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {articles}
            </div>
        )
    }
}

export default ProjectJourney