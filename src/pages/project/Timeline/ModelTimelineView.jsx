import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class ModelTimelineView extends Component {
    render() {
        const {article} = this.props
        return (
            <div className="timeline-item tracking-wide" data-aos="fade-zoom-in" data-aos-duration="500" data-aos-offset="0">
                <div className='jakarta text-[14px] text-[#48484a] dark:text-[#cccbcb] duration-200 flex gap-1'>
                    <p>{article.fields.outline}</p>
                    <a href={article.fields.hyperlink} target='_blank' rel="noreferrer" className='underline'>{article.fields.linkName}</a>
                </div>
                <Link to={`/project/${article.fields.slug}`} className="timeline-item-content bg-[#E5E5EA] hover:bg-[#d7d7dc] dark:bg-black dark:hover:bg-[#0c0c0c] gap-4 text-[#282a2f] dark:text-[#cccbcb] duration-200">
                    <div className='flex flex-col gap-2 text-left'>
                        <p className='jakarta-500 text-[14px]'>{article.fields.title}</p>
                        <p className='jakarta text-[14px]'>{article.fields.shortDescription}</p>
                    </div>
                    <img src={"https:" + article.fields.image.fields.file.url} alt="" className='rounded-xl'/>
                    <p className='jakarta text-[12px]'>{moment(article.fields.date).format('ll')}</p>
                    <span className="circle bg-[#E5E7EB] dark:bg-[#000]" />
                </Link>
            </div>
        )
    }
}

