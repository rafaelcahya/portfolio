import React, { Component } from 'react'
import { marked } from "marked";
import moment from 'moment';

export class ChangelogModel extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='bg-[#f2f2f7] text-[#282a2f] dark:text-[#cccbcb] dark:bg-[#10101A] duration-200 h-screen jakarta-400 tracking-wide px-32'>
                    <div>
                        <p>Changelog</p>
                        <div>
                            <p>V {article.fields.version}</p>
                            <p className='jakarta-400'>{moment(article.fields.date).format('ll')}</p>
                            <div dangerouslySetInnerHTML={{ __html: marked(article.fields.description) }} className="list-none leading-6" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChangelogModel