import React, { Component } from 'react';
import client from '../../../client';
import Loading from '../../../components/major/loading/Loading';

import ModelGridView from './ModelGridView';

export default class GridView extends Component {
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
        const articles = this.state.articles.map((article, i) => <ModelGridView id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-32 mx-20 xl:mx-64 my-10'>
                    {articles}
                </div>
            </>
        )
    }
}
