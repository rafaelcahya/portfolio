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
                            <div className='flex flex-col items-center text-center gap-10'>
                                <img src={"https:" + this.state.article.fields.featureImage1.fields.file.url} alt="" data-aos='zoom-in' data-aos-easing="ease-out" data-aos-delay="200" data-aos-duration="500"/>
                                <p className='jakarta-700 text-[25px]' data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">{this.state.article.fields.featureName1}</p>
                                <p className='text-[18px] lg:text-[22px] w-full lg:w-3/4 leading-9' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.featureDescription1}</p>
                            </div>
                            {
                                !this.state.article.fields.featureImage2 &&
                                !this.state.article.fields.featureName2 &&
                                !this.state.article.fields.featureDescription2 ? (null) : (
                                    <div className='flex justify-center'>
                                        <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-20 1-full lg:w-3/4 xl:w-[1000px]'>
                                            <img src={"https:" + this.state.article.fields.featureImage2.fields.file.url} alt=""data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="200" data-aos-duration="500"/>
                                            <div className='flex flex-col text-center lg:text-left gap-10 lg:gap-5'>
                                                <p className='jakarta-700 text-[25px]'data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">{this.state.article.fields.featureName2}</p>
                                                <p className='text-[18px] lg:text-[22px] leading-9' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.featureDescription2}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                !this.state.article.fields.featureImage3 &&
                                !this.state.article.fields.featureName3 &&
                                !this.state.article.fields.featureDescription3 ? (null):(
                                    <div className='flex justify-center'>
                                        <div className='flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20 1-full lg:w-3/4 xl:w-[1000px]'>
                                            <img src={"https:" + this.state.article.fields.featureImage3.fields.file.url} alt=""data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="200" data-aos-duration="500"/>
                                            <div className='flex flex-col text-center lg:text-left gap-10 lg:gap-5'>
                                                <p className='jakarta-700 text-[25px]'data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">{this.state.article.fields.featureName3}</p>
                                                <p className='text-[18px] lg:text-[22px] leading-9' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500">{this.state.article.fields.featureDescription3}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='flex flex-col items-center gap-20'>
                                <p className='jakarta-700 text-[25px]'data-aos='fade-up' data-aos-easing="ease-out" data-aos-duration="500">Full design</p>
                                <img src={"https:" + this.state.article.fields.fullDesignImage.fields.file.url} alt="" className='w-full lg:w-3/4' data-aos='fade-up' data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500"/>
                            </div>
                        </div>
                    </div>
                </>
            )
        )
    }
}

//     <div className='flex h-screen'>
//                                     <div className='m-auto px-32'>
//                                         <p className='text-[#8A8A8A] pb-2'>Description</p>
//                                         <span className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider leading-[50px]'>{this.state.article.fields.longDescription}</span>
//                                     </div>
//                                 </div>
//                                 <div className='flex h-screen'>
//                                     <div className='flex justify-between items-center px-32 w-3/4'>
//                                         <div className='flex flex-col gap-2'>
//                                             <p className='text-[#8A8A8A]'>Tech Stack</p>
//                                             <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.techStack}</p>
//                                         </div>
//                                         <div className='flex flex-col gap-2'>
//                                             <p className='text-[#8A8A8A]'>Project Length</p>
//                                             <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.projectLength}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='flex h-screen'>
//                                     <div className='flex flex-col justify-center gap-2 px-32'>
//                                         <p className='text-[#8A8A8A]'>Contributors</p>
//                                         <div dangerouslySetInnerHTML={{ __html: marked(this.state.article.fields.contributors) }} className="underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider" />
//                                     </div>
//                                 </div>
//                                 <div className='flex h-screen'>
//                                     <div className='flex justify-between items-center px-32 w-3/4'>
//                                         <div className='flex flex-col gap-2'>
//                                             <p className='text-[#8A8A8A]'>Posted date</p>
//                                             <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{moment(this.state.article.sys.updatedAt).format('ll')}</p>
//                                         </div>
//                                         <div className='flex flex-col gap-2'>
//                                             <p className='text-[#8A8A8A]'>Posted by</p>
//                                             <p className='underline-animation bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] tracking-wider'>{this.state.article.fields.postedBy}</p>
//                                         </div>
//                                     </div>
//                                 </div>
// 