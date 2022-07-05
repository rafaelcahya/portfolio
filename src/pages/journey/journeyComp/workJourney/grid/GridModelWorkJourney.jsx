import React, { Component } from 'react'
import moment from 'moment'

export class GridModelWorkJourney extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='flex flex-col gap-5 tracking-wide'>
                    <p className='jakarta-500 text-[20px]'>{article.fields.companyName}</p>
                    <p className='jakarta text-[#9D9D9D]'>{article.fields.position}</p>
                    <div className='flex gap-5'>
                        <p className='jakarta text-[#9D9D9D]'>{moment(article.fields.startDate).format("MMM' YY")}</p>
                        <p className='jakarta text-[#9D9D9D]'>{moment(article.fields.endDate).format("MMM' YY")}</p>
                    </div> 
                </div>
            </>
        )
    }
}

export default GridModelWorkJourney