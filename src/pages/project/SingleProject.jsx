import React, { Component } from 'react';
import client from '../../client';
import { marked } from 'marked';
import moment from 'moment'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Mousewheel } from "swiper";

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
                    <div className='bg-[#eceef0] text-[#282a2f] dark:text-[#cccbcb] dark:bg-black duration-200 h-screen jakarta tracking-wider overflow-hidden'>
                        <Swiper
                            direction={"vertical"}
                            slidesPerView={1}
                            spaceBetween={30}
                            mousewheel={true}
                            pagination={{
                                type: "progressbar",
                                clickable: true,
                            }}
                            modules={[Mousewheel, Pagination]}
                        >
                            <SwiperSlide >
                                <div className='flex flex-col gap-20 py-24 px-32'>
                                    <img src={"https:" + this.state.article.fields.image.fields.file.url} alt="" className='mx-auto w-[650px] rounded-xl'/>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#8A8A8A]' data-aos="fade-right">Project name</p>
                                        <a href={this.state.article.fields.hyperlink} target='_blank' rel="noreferrer" className='jakarta-500 text-[25px] underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 w-fit' data-aos="fade-right" data-aos-delay="200">{this.state.article.fields.title}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex h-screen'>
                                    <div className='m-auto px-32'>
                                        <p className='text-[#8A8A8A] pb-2'>Description</p>
                                        <span className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider leading-[50px]'>{this.state.article.fields.longDescription}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex h-screen'>
                                    <div className='flex justify-between items-center px-32 w-3/4'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#8A8A8A]'>Tech Stack</p>
                                            <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.techStack}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#8A8A8A]'>Project Length</p>
                                            <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.projectLength}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex h-screen'>
                                    <div className='flex flex-col justify-center gap-2 px-32'>
                                        <p className='text-[#8A8A8A]'>Contributors</p>
                                        <div dangerouslySetInnerHTML={{ __html: marked(this.state.article.fields.contributors) }} className="underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex h-screen'>
                                    <div className='flex justify-between items-center px-32 w-3/4'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#8A8A8A]'>Posted date</p>
                                            <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{moment(this.state.article.sys.updatedAt).format('ll')}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#8A8A8A]'>Posted by</p>
                                            <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.postedBy}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        {/*  */}
                    </div>
                </>
            )
        )
    }
}