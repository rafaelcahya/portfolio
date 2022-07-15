import React, { Component } from 'react';
import client from '../../../client';
import Loading from '../../../components/major/loading/Loading';
import CodeModel from './CodeListModel';

export default class GridView extends Component {
    constructor() {
        super()
    
        this.state = {
            articles: []
        }
    }

    componentDidMount() { 
        client.getEntries({content_type: 'uniqueCode'}).then((response) => {
            response.items.sort((a,b) => new Date(a.fields.date) > new Date(b.fields.date) ? -1 : 1);
            this.setState({articles: response.items})
        })
    } 
    render() {
        const articles = this.state.articles.map((article, i) => <CodeModel id={i} key={i} article={article}/>)
        if(!articles){
            return <Loading/>
        }
        return (
            <div className='flex flex-col items-center gap-14 py-52 bg-[#fff] dark:bg-[#10101A]  text-[#282a2f] dark:text-[#fff] duration-200'>
                <div className='flex flex-col text-center gap-3'>
                    <p className='jakarta-700 text-[33px]'>Unique Code</p>
                    <p className='text-[#6C7686]'>A collection of codes that are unique from any case.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-20 xl:mx-64 my-10'>
                    {articles}
                </div>
            </div>
        )
    }
}
