import React from 'react'

function Changelog() {
    return (
        <>
            <div className='frosted_glass flex flex-col gap-5 p-5 letterspacing-1 w-[300px]'>
                <div className='text-gray-300 text_poppins_400 text-14 flex justify-between'>
                    <p>Latest Releases</p>
                    <p>V 1.0.0</p>
                </div>
                <div className='textcolor2 text-12 text_poppins_200 flex flex-col gap-2'>
                    <p className='text_poppins_400'>Nov 7, 2020</p>
                    <div className='flex flex-col gap-2 leading-loose'>
                        <p>New "Guiding Principles" sub-section to "How do I make a changelog?".</p>
                        <p>New "Guiding Principles" sub-section to "How do I make a changelog?".</p>
                    </div>
                </div>
                <p className='text-14 text_poppins_200 text-gray-300 cursor-pointer underline w-fit'>All latest releases</p>
            </div>
        </>
    )
}

export default Changelog