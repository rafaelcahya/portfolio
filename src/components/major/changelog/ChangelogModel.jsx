import React, { Component } from 'react'
import moment from 'moment'
import { marked } from 'marked'
import { Link } from 'react-router-dom'

export default class ChangelogModel extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='bg-[#cccdd1] text-[#282a2f] dark:text-[#cccbcb] dark:bg-[#42464f] bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg flex flex-col gap-5 p-5 w-[300px] tracking-wider'>
                    <div className='jakarta-400 text-[14px] flex justify-between'>
                        <p>Latest Release</p>
                        <p>{article.fields.version}</p>
                    </div>
                    <div className='text-[12px] jakarta-200 flex flex-col gap-2'>
                        <p className='jakarta-400'>{moment(article.fields.date).format('ll')}</p>
                        <div dangerouslySetInnerHTML={{ __html: marked(article.fields.description) }} className="list-none leading-6" />
                    </div>
                    <Link to="/changelog" className='text-[14px] jakarta cursor-pointer underline w-fit'>All latest releases</Link>
                </div>
            </>
        )
    }
}
