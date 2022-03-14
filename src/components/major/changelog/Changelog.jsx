import React, { Component } from 'react'
import client from '../../../client'

import Loading from '../loading/Loading'
import ChangelogModel from './ChangelogModel'

export default class Changelog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        client.getEntries({content_type: 'changelog'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 

    render() {
        const articles = this.state.articles.map((article, i) => <ChangelogModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return <div>
            {articles[0]}
        </div>
    }
}
