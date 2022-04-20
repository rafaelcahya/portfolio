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
                <div className='bg-[#f9f9f9] text-[#282a2f] dark:text-[#cccbcb] dark:bg-black duration-200 min-h-screen flex justify-center m-auto'>
                    <div className='w-full md:w-3/4 xl:w-1/2 px-10'>
                        <div className='jakarta-200 flex justify-between py-20'>
                            <p>Changelog</p>
                        </div>
                        <div className='flex flex-col gap-20'>
                            {articles}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
