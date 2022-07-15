import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CodeListModel extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <Link to={`/code/${article.fields.slug}`}>
                    <div className='group flex flex-col gap-5 light:text-[#282a2f] dark:text-[#fff] dark:bg-[#161623] light:bg-[#fff] p-7 rounded-xl dark:border-2 light:border-[#fff] dark:border-[#26263c] duration-200 jakarta hover:shadow-xl'>
                        <p className='group-hover:text-blue-500 jakarta-500'>{article.fields.title}</p>
                        <p className='text-[#6C7686] line-clamp-2'>{article.fields.description}</p>
                    </div>
                </Link>
            </>
        )
    }
}

export default CodeListModel