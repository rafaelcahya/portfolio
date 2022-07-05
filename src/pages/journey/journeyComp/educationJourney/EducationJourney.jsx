import React, { Component } from 'react'
import client from '../../../../client'
import Loading from '../../../../components/major/loading/Loading'
import ModelBioEducation from './ModelBioEducation'

export class EducationJourney extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'education'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <ModelBioEducation id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <>
                <div className='flex flex-wrap gap-32'>{articles}</div>
            </>
        )
    }
}

export default EducationJourney