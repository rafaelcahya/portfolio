import moment from 'moment'
import React, { Component } from 'react'

export class ModelBioEducation extends Component {
    render() {
        const {article} = this.props
        return (
            <div className='flex flex-col gap-5 tracking-wide'>
                <p className='jakarta-500 text-[20px]'>{article.fields.schooluniversityName}</p>
                <p className='jakarta text-[#9D9D9D]'>{article.fields.shortDescription}</p>
                <p className='jakarta text-[#9D9D9D]'>{moment(article.fields.date).format("MMM' YY")}</p>
            </div>
        )
    }
}

export default ModelBioEducation