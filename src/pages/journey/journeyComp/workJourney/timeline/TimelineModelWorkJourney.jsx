import React, { Component } from 'react'
import moment from 'moment'

export class TimelineModelWorkJourney extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='row timeline-item'>
                    <div className='timeline-item-title flex flex-col gap-5'>
                        <p className='jakarta-500 text-[20px]'>{article.fields.companyName}</p>
                        <p className='jakarta text-[#9D9D9D]'>{article.fields.position}</p> 
                    </div>
			        <div className="timeline-item-selector"></div>
                    <div className='timeline-item-date flex gap-3'>
                        <p className='jakarta text-[#9D9D9D]'>{moment(article.fields.startDate).format("MMM' YY")}</p>
                        <p className='jakarta text-[#9D9D9D]'>{moment(article.fields.endDate).format("MMM' YY")}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TimelineModelWorkJourney