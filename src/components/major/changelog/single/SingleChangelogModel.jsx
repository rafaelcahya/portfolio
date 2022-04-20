import React, { Component } from 'react'
import moment from 'moment'
import { marked } from 'marked'

export default class SingleChangelogModel extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='flex flex-col gap-5 border-b border-gray-300 dark:border-gray-800 pb-20 tracking-wider'>
                    <div className='jakarta-500 text-[14px] flex justify-between'>
                        <p>V {article.fields.version}</p>
                        <p>{moment(article.fields.date).format('ll')}</p>
                    </div>
                    <div className='jakarta text-[12px] text-[#fff] flex flex-wrap gap-2 uppercase'>
                        {
                            article.fields.type.map((type, index) => (
                                type === "UI Design" ? (
                                    <p key={index} className='bg-blue-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) :
                                type === "UX Design" ? (
                                    <p key={index} className='bg-amber-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) :
                                type === "New featured" ? (
                                    <p key={index} className='bg-green-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) :
                                type === "Removed" ? (
                                    <p key={index} className='bg-rose-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) :
                                type === "Bugfixed" ? (
                                    <p key={index} className='bg-red-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) :
                                type === "Security" ? (
                                    <p key={index} className='bg-neutral-600 rounded-md px-4 py-1.5'>{type}</p>
                                ) : (
                                    <p key={index}>{type}</p>
                                )
                            ))
                        }
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: marked(article.fields.description)}} className="jakarta text-[14px] list-none" />
                </div>
            </>
        )
    }
}
