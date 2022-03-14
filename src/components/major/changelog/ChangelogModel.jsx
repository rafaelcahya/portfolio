import React, { Component } from 'react'
import moment from 'moment'
import { marked } from 'marked'
import { Link } from 'react-router-dom'

export default class ChangelogModel extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='frosted_glass flex flex-col gap-5 p-5 letterspacing-1 w-[300px]'>
                    <div className='text-gray-300 text_poppins_400 text-14 flex justify-between'>
                        <p>Latest Releases</p>
                        <p>{article.fields.version}</p>
                    </div>
                    <div className='textcolor2 text-12 text_poppins_200 flex flex-col gap-2'>
                        <p className='text_poppins_400'>{moment(article.fields.date).format('ll')}</p>
                        <div dangerouslySetInnerHTML={{ __html: marked(article.fields.description) }} className="list-none textcolor2" />
                    </div>
                    <Link to="/changelog" className='text-14 text_poppins_200 text-gray-300 cursor-pointer underline w-fit'>All latest releases</Link>
                </div>
            </>
        )
    }
}
