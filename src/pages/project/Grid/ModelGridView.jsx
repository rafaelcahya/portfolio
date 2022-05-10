import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default class ModelGridView extends Component {
    render() {
        const {article} = this.props
        AOS.init();
        return (
            <Link to={`/project/${article.fields.slug}`} data-aos="fade-zoom-in" data-aos-duration="500">
                <div className='flex flex-col gap-5 text-[#282a2f] dark:text-[#cccbcb] tracking-wide'>
                    <img src={"https:" + article.fields.image.fields.file.url} alt="" className='rounded-xl hover:scale-105 transform duration-300'/>
                    <div className='flex justify-between'>
                        <p className='jakarta-200 text-[13px]'>{moment(article.fields.date).format('ll')}</p>
                        <p className='jakarta-500 text-[15px]'>{article.fields.title}</p>
                    </div>
                </div>
            </Link>
        )
    }
}