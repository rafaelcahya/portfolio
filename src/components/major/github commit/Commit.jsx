import React, { Component } from 'react';

import client from '../../../client';
import Loading from '../loading/Loading';
import Topbar from '../top bar/Topbar';
import Github from './Github';

export default class Commit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            article: null,
        }
    }
    
    componentDidMount() {
        const {params} = this.props.match
        if(params && params.slug){
            client.getEntries({content_type: 'currentlyProject', 'fields.slug': params.slug}).then((response) => {
                this.setState({article: response.items[0]})
            })
        }
    }
    
    render() {
        return (
            !this.state.article ? <Loading/> : (
                <>
                    <div className='fixed top-0'>
                        <Topbar/>
                    </div>
                    <div className='flex justify-center min-h-screen bg-[#eceef0] text-[#282a2f] dark:text-[#cccbcb] dark:bg-black duration-200 py-20'>
                        <div className='w-full md:w-3/4 xl:w-1/2 px-10'>
                            <div className='flex flex-col justify-center gap-20'>
                                <div className='jakarta-200 flex justify-between'>
                                    <p>Commit list</p>
                                    <p>{this.state.article.fields.name}</p>
                                </div>
                                <Github/>
                            </div>
                        </div>
                    </div>
                </>
            )
        )
    }
}