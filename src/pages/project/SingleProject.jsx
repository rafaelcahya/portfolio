import React, { Component } from 'react';
import client from '../../client';
import { marked } from 'marked';
import moment from 'moment'

import Loading from '../../components/major/loading/Loading';
import Navbar from '../../components/Navbar';
import TemporaryPage from '../../components/major/Jokes/TemporaryPage';

export default class SingleProject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            article: null
        }
    }

    componentDidMount() {
        const {params} = this.props.match
        if(params && params.slug){
            client.getEntries({content_type: 'project', 'fields.slug': params.slug}).then((response) => {
                response.items.sort((a,b) => new Date(a.fields.date) > new Date(b.fields.date) ? -1 : 1);
                this.setState({article: response.items[0]})
            })
        }
    } 

    render() {
        return (
            !this.state.article ? <Loading/> : (
                <>
                    <Navbar/>
                    <TemporaryPage/>
                    
                </>
            )
        )
    }
}