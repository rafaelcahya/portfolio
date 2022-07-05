import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ModelProjectJourney extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <Link to={`/project/${article.fields.slug}`} className='group flex flex-col gap-2 tracking-wide'>
                    <p className='jakarta-500 text-[20px] group-hover:text-[#2094FA] group-hover:underline underline-offset-4'>{article.fields.title}</p>
                    <p className='jakarta text-[#9D9D9D]'>{article.fields.shortDescription}</p>
                </Link>
            </>
        )
    }
}

export default ModelProjectJourney