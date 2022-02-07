import React, { Component } from 'react';
import moment from 'moment'

export default class EventModel extends Component {
    render() {
        const {article} = this.props
        return (
            <div className='timeline-item text-gray-300'>
                <div>
                    <p className='text-13 text_poppins_200 letterspacing-1'>{moment(article.fields.date).format('ll')}</p>
                    <p className='text_poppins_400'>{article.fields.title}</p>
                </div>
                <div className="timeline-item-content gap-4">
                    <div className='flex justify-between items-center w-full'>
                        <a href={article.fields.hyperlink} target='_blank' rel='noreferrer' className='text-left text-13 text_poppins_200 letterspacing-1 hover:underline'>{article.fields.source}</a>
                        <a href={article.fields.hyperlink} target='_blank' rel='noreferrer'>
                            <img src={"https:" + article.fields.sourceLogo.fields.file.url} alt="" className='rounded-xl w-8'/>
                        </a>
                    </div>
                    <img src={"https:" + article.fields.picture.fields.file.url} alt="" className='rounded-xl'/>
                    <p className='text-left text-13 text_poppins_200 letterspacing-1'>{article.fields.description}</p>
                    <span className="circle" />
                </div>
            </div>
        )
    }
}
