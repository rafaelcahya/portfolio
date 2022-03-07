import React, { Component } from 'react';
import client from '../../client';
import Loading from '../../components/major/loading/Loading';
import Topbar from '../../components/major/top bar/Topbar';

import HomeModel from './HomeModel';

export default class Home extends Component {
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
        const articles = this.state.articles.map((article, i) => <HomeModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return <>
            <Topbar/>
            {articles}
        </>;
    }
}
