import React, { Component } from 'react'
import client from '../../../../client'
import Loading from '../../../../components/major/loading/Loading'
import ModelBioJourney from './ModelBioJourney'

export class BioJourney extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'profile'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <ModelBioJourney id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <div>
                {articles}
            </div>
        )
    }
}

export default BioJourney