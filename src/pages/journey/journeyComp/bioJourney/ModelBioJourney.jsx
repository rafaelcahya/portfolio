import React, { Component } from 'react'

export class ModelBioJourney extends Component {
    render() {
        const {article} = this.props
        return (
            <>
                <div className='flex flex-col justify-center text-center md:text-left gap-5 tracking-wide h-screen px-16 md:px-32'>
                    <p className='jakarta text-[20px]'>Hey there, </p>
                    <p className='jakarta-500 text-[48px]'>{article.fields.name}</p>
                    <p className='jakarta-400 text-[#8A8A8A] text-[25px]'>{article.fields.bio}</p>
                </div>
            </>
        )
    }
}

export default ModelBioJourney