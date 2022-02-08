import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default class CurrentlyProjectNoteModel extends Component {
    render() {
        AOS.init();
        const {article} = this.props
        return <>
            <div className='text_poppins_200 text-14 letterspacing-1 text-gray-300 flex flex-col md:flex-row justify-center gap-5 md:gap-32 mx-20'>
                <div className='box flex gap-1'>
                    <p>Currently</p>
                    <span className='pulse h-2 w-2 rounded-full bg-green-300'></span>
                </div>
                <div className='max-w-sm' data-aos="fade-left" data-aos-duration="500" data-aos-offset="50">
                    <Link to={`/project/progress/${article.fields.slug}`}>{article.fields.description}</Link>
                </div> 
            </div>
        </>;
    }
}