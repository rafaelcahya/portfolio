import React, { Component } from 'react';
import client from '../../../../client';
import Loading from '../../loading/Loading';
import Topbar from '../../top bar/Topbar';

import SingleChangelogModel from './SingleChangelogModel';

export default class SingleChangelog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        client.getEntries({content_type: 'changelog'}).then((response) => {
            this.setState({articles: response.items})
            console.log({articles: response.items})
        })
    } 

    render() {
        const articles = this.state.articles.map((article, i) => <SingleChangelogModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <>
                <div className='fixed top-0'>
                    <Topbar/>
                </div>
                <div className='w-2/4 m-auto text-gray-300'>
                    <div className='text-poppins-200 text-gray-300 flex justify-between my-20'>
                        <p>Changelog</p>
                    </div>
                    <div className='flex flex-col gap-20'>
                        {articles}
                    </div>
                </div>
            </>
        )
    }
}
