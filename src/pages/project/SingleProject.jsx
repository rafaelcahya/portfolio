import { marked } from 'marked';
import React, { Component } from 'react';
import client from '../../client';

import Loading from '../../components/major/loading/Loading';
import Navbar from '../../components/Navbar';

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
                    <div className='bg-[#eceef0] text-[#48484a] dark:text-[#d0d0d0] dark:bg-[#10101A] duration-200 jakarta tracking-wider'>
                        <div className='flex h-screen'>
                            <div className='m-auto flex flex-col gap-8 text-center'>
                                <a href={this.state.article.fields.hyperlink} target='_blank' rel="noreferrer" className='jakarta-700 text-[48px]' data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">{this.state.article.fields.title}</a>
                                <p className='text-[20px] text-[#8A8A8A]' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.outline}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-96 py-32 px-5'>
                            <div className='flex flex-col gap-10 mx-10 md:mx-32 xl:mx-64'>
                                <p className='jakarta-700 text-[25px]' data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">{this.state.article.fields.title}</p>
                                <p className='text-[18px] lg:text-[22px] w-full lg:w-4/5 leading-9' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.description}</p>
                            </div>
                            <div className='flex flex-col gap-10 mx-10 md:mx-32 xl:mx-64'>
                                <p className='jakarta-700 text-[25px]' data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">The challenge</p>
                                <p className='text-[18px] lg:text-[22px] w-full lg:w-4/5 leading-9' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.anotherFeature}</p>
                            </div>
                            <div className='flex flex-col items-center gap-20'>
                                <p className='jakarta-700 text-[25px]'data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">Full design</p>
                                <img src={"https:" + this.state.article.fields.displayImage.fields.file.url} alt="" className='w-full lg:w-3/4' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        )
    }
}