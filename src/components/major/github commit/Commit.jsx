import React, { Component } from 'react';

import client from '../../../client';
import Loading from '../loading/Loading';
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
                    <div className='w-2/4 m-auto'>
                        <div className='flex flex-col'>
                            <div className='text-poppins-200 flex justify-between text-gray-300 my-20'>
                                <p>Commit list</p>
                                <p>{this.state.article.fields.name}</p>
                            </div>
                            <Github/>
                        </div>
                    </div>
                </>
            )
        )
    }
}