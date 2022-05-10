import React, { Component } from 'react';
import moment from 'moment'

export default class EventModel extends Component {
    render() {
        const {article} = this.props
        return (
            <div className='timeline-item tracking-wide' data-aos="fade-zoom-in" data-aos-duration="500" data-aos-offset="0">
                <div className='flex flex-col gap-2'>
                    <p className='text-[13px] jakarta-200'>{moment(article.fields.date).format('ll')}</p>
                    <p className='text-[14px] max-w-2xl jakarta-500 leading-7'>{article.fields.title}</p>
                </div>
                <div className="timeline-item-content bg-[#E5E7EB] hover:bg-[#dcdee1] dark:bg-black dark:hover:bg-[#0c0c0c] gap-4 text-[#282a2f] dark:text-[#cccbcb] duration-200">
                    <div className='flex justify-between items-center w-full'>
                        <a href={article.fields.hyperlink} target='_blank' rel='noreferrer' className='text-left text-[14px] jakarta-200 hover:underline'>{article.fields.source}</a>
                        <a href={article.fields.hyperlink} target='_blank' rel='noreferrer'>
                            <img src={"https:" + article.fields.sourceLogo.fields.file.url} alt="" className='rounded-xl w-8'/>
                        </a>
                    </div>
                    <img src={"https:" + article.fields.picture.fields.file.url} alt="" className='rounded-xl'/>
                    <p className='text-left text-[14px] jakarta-200 leading-7'>{article.fields.description}</p>
                    <span className="circle bg-[#E5E7EB] dark:bg-[#000]" />
                </div>
            </div>
        )
    }
}
