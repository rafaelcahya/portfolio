import React, { Component } from 'react';
import client from '../../client';
import { marked } from 'marked';
import moment from 'moment'

import back_icon from '../../asset/icon/chevron-left.svg'
import { Link } from 'react-router-dom';
import Loading from '../../components/major/loading/Loading';

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
                console.log({article: response.items[0]})
            })
        }
    } 

    render() {
        return (
            !this.state.article ? <Loading/> : (
                <>
                    <div className='text-gray-300 w-1/2 m-auto flex flex-col gap-20 my-40'>
                        <Link to="/project" className='frosted_glass fixed top-10 flex items-center gap-5 px-5 py-3 w-1/2 rounded-lg'>
                            <img src={back_icon} alt="" />
                            <p className='text_poppins text-14 letterspacing-2'>{this.state.article.fields.title}</p>
                        </Link>
                        <div className='flex flex-col gap-10'>
                            <p className='text_poppins text-25 letterspacing-2'>{this.state.article.fields.title}</p>
                            <img src={"https:" + this.state.article.fields.image.fields.file.url} alt="" className='rounded-xl'/>
                        </div>
                        <div className='text_poppins letterspacing-1 flex flex-col gap-20'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-13 text-gray-500'>Description</p>
                                <p className='text-14 leading-8'>{this.state.article.fields.longDescription}</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-13 text-gray-500'>Tech Stack</p>
                                <p className='text-14 leading-8'>{this.state.article.fields.techStack}</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-13 text-gray-500'>Project Length</p>
                                <p className='text-14 leading-8'>{this.state.article.fields.projectLength}</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-13 text-gray-500'>Contributors</p>
                                <div dangerouslySetInnerHTML={{ __html: marked(this.state.article.fields.contributors) }}className="text-14 leading-8 list-none" />
                            </div>
                        </div>
                        <div className='text_poppins letterspacing-1 flex justify-between border-t border-gray-900 py-20'>
                            <div>
                                <p className='text-13 text-gray-500'>Posted date</p>
                                <p className='text-14 leading-8'>{moment(this.state.article.sys.updatedAt).format('ll')}</p>
                            </div>
                            <div>
                                <p className='text-13 text-gray-500'>Posted by</p>
                                <p className='text-14 leading-8'>{this.state.article.fields.postedBy}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        )
    }
}
