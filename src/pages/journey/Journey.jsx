import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import EducationJourney from './journeyComp/educationJourney/EducationJourney';
import BioJourney from './journeyComp/bioJourney/BioJourney';
import TimelineWorkJourney from './journeyComp/workJourney/timeline/TimelineWorkJourney';
import ProjectJourney from './journeyComp/projectJourney/ProjectJourney';

export class Journey extends Component {
    render() {
        return <>
            <Link to='/' className='group absolute top-10 left-10 right-0 flex items-center gap-2 w-fit duration-200'>
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" className='group-hover:fill-black -rotate-90 duration-200' xmlns="http://www.w3.org/2000/svg">
                <path d="M3.68478 18.7826L11.5642 4.77473C11.7554 4.43491 12.2446 4.43491 12.4358 4.77473L20.3152 18.7826C20.5454 19.1918 20.1357 19.6639 19.6982 19.4937L12.1812 16.5705C12.0647 16.5251 11.9353 16.5251 11.8188 16.5705L4.30179 19.4937C3.86426 19.6639 3.45463 19.1918 3.68478 18.7826Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Back</p>
            </Link>
            <BioJourney/>
            <div className='flex flex-col gap-56 py-32 px-16 md:px-32 transition-all duration-200'>
                <div className='flex flex-col gap-10 tracking-wide='>
                    <p className='jakarta text-[31px]'>Education</p>
                    <EducationJourney/>
                </div>
                <div className='flex flex-col gap-10 tracking-wide'>
                    <p className='jakarta text-[31px]'>Work</p>
                    <div className="timeline">
                        <TimelineWorkJourney/>
                    </div>
                </div>
                <div className='flex flex-col gap-10 tracking-wide'>
                    <p className='jakarta text-[31px]'>Project</p>
                    <ProjectJourney/>
                </div>
            </div>
            <div className='flex justify-between px-10 md:px-20 py-10 text-[#9D9D9D] text-[14px] pt-32'>
                <p className='jakarta tracking-wide'>Created by cahya</p>
                <div className='flex gap-10 jakarta-400 uppercase tracking-widest'>
                    <a href='https://www.linkedin.com/in/cahya-putra-ugira-216549190/' target='_blank' rel="noreferrer" className='hover:text-[#6f7379]'>linkedin</a>
                    <a href='mailto: cahyaputraugira95@gmail.com?subject=Mail from cahyaputraugira.com' target='_blank' rel="noreferrer" className='hover:text-[#6f7379]'>Email</a>
                </div>
            </div>
        </>
    }
}

export default Journey