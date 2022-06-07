import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default class ModelGridView extends Component {
    render() {
        const {article} = this.props
        AOS.init();
        return (
            <Link to={`/project/${article.fields.slug}`} data-aos="fade-zoom-in" data-aos-duration="500">
                <div className='group flex flex-col gap-5 text-[#48484a] dark:text-[#cccbcb] tracking-wide'>
                    <img src={"https:" + article.fields.image.fields.file.url} alt="" className='rounded-md group-hover:scale-105 group-hover:drop-shadow-xl transform duration-300'/>
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <p className='jakarta-400 text-[20px]'>{article.fields.title}</p>
                        <p className='jakarta text-[14px]'>{article.fields.shortDescription}</p>
                    </div>
                </div>
            </Link>
        )
    }
}