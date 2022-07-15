import React, { Component, createRef } from 'react';
import client from '../../client'
import Loading from '../../components/major/loading/Loading';
import ReactMarkdown from 'react-markdown';
import Toggle from '../../components/major/darkmode/ThemeToggle';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'

class SingleCode extends Component {
    constructor(props) {
        super(props)
        this.myRef = createRef() 
    
        this.state = {
            article: null
        }   
    }

    componentDidMount() {
        const {params} = this.props.match
        if(params && params.slug){
            client.getEntries({content_type: 'uniqueCode', 'fields.slug': params.slug}).then((response) => {
                this.setState({article: response.items[0]})
                console.log({article: response.items})
            })
        }
    }

    render() {
        return (
            !this.state.article ? <Loading/> : (
                <div className='bg-[#fff] text-[#282a2f] dark:text-[#fff] dark:bg-[#10101A] duration-200 jakarta flex flex-col gap-20 pt-20'>
                    <div className='px-10 sm:px-20 md:px-40 lg:px-56 xl:px-96'>
                        <div className='flex flex-col gap-20'>
                            <div className='flex flex-col gap-20'>
                                <div className='flex items-center justify-between'>
                                    <Link to='/code' className='flex items-center gap-1 hover:text-blue-500'>
                                        <svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p>back</p>
                                    </Link>
                                    <Toggle />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <LinkScroll to="source" spy={true} smooth={true} className='group flex items-center gap-1 text-[13px] text-[#6C7686] cursor-pointer'>
                                        <p>#</p>
                                        <p className='group-hover:underline jakarta-400 uppercase tracking-wider'>{this.state.article.fields.ucid}</p>
                                    </LinkScroll>
                                    <h1 className='jakarta-500 text-[25px]'>{this.state.article.fields.title}</h1>
                                    <div className='flex items-center gap-5 text-[#6C7686] jakarta-400 text-[13px]'>
                                        {
                                            this.state.article.fields.tags.map((index, i) => (
                                                <p key={index}>{this.state.article.fields.tags[i]}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='markdown flex flex-col gap-7 leading-8'>
                                <ReactMarkdown>{this.state.article.fields.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    <div id="source" className='flex flex-col items-center gap-10 px-10 sm:px-20 md:px-40 lg:px-56 py-20'>
                        <p className='jakarta-500 text-[25px]'>Source</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10'>
                            {
                                this.state.article.fields.source.source.map((index, i) => (
                                    <a href={this.state.article.fields.source.source[i].link} key={i} className='group flex flex-col gap-2' target="_blank" without rel="noreferrer">
                                        <p className='group-hover:underline group-hover:text-blue-500 jakarta-500'>{this.state.article.fields.source.source[i].title}</p>
                                        <p className='text-[#6C7686] line-clamp-2'>{this.state.article.fields.source.source[i].desc}</p>
                                        <p className='jakarta-500 text-[13px]'>{this.state.article.fields.source.source[i].sourcename}</p>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-gray-50 p-20 text-[48px] jakarta-700 linear-wipe text-center'>
                        <p>Unique Code</p>
                    </div>
                </div>
            )
        )
    }
}

export default SingleCode