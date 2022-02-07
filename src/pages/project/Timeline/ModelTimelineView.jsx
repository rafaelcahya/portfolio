import React, { Component } from 'react';
import moment from 'moment';

export default class ModelTimelineView extends Component {
    render() {
        const {article} = this.props
        return (
            <div className="timeline-item">
                <div className='text_poppins_200 text-14 letterspacing-1 text-gray-300 flex gap-1'>
                    <p>{article.fields.outline}</p>
                    <a href={article.fields.hyperlink} target='_blank' rel="noreferrer" className='underline'>{article.fields.linkName}</a>
                </div>
                <div className="timeline-item-content gap-4 text-gray-300">
                    <div className='text-left'>
                        <p className='text_poppins_400'>{article.fields.title}</p>
                        <p className='text_poppins_200 text-13 letterspacing-1'>{article.fields.shortDescription}</p>
                    </div>
                    <img src={"https:" + article.fields.image.fields.file.url} alt="" className='rounded-xl'/>
                    <p className='text_poppins_200 text-13 letterspacing-1'>{moment(article.fields.date).format('ll')}</p>
                    <span className="circle" />
                </div>
            </div>
        )
    }
}