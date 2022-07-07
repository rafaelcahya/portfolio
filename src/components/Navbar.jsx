import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';

import Toggle from './major/darkmode/ThemeToggle'

export default function Navbar() {
    AOS.init();
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') { 
                if (window.scrollY < lastScrollY) {
                    setShow(false); 
                } else {
                    setShow(true);  
                }
                    setLastScrollY(window.scrollY); 
            }
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
        <div className='flex justify-center'>
            <div className={`w-[450px] md:w-[550px] lg:w-[650px] bg-[#fff] dark:bg-[#030305c4] backdrop-filter backdrop-blur-lg z-50 fixed top-5 flex items-center justify-between px-5 py-2 rounded-3xl duration-200 hover:shadow-md shadow ${show && 'top-5 opacity-0 duration-200'}`}>
                <div className='flex gap-3'>
                    <Link to="/" >
                        <div className='group p-3.5 rounded-md'>
                            <svg width="24" height="24" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]">
                                <path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to="/project">
                        <div className='group p-3.5 rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                    </Link>
                    <Link to="/code">
                        <div className='group p-3.5 rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                    </Link>
                </div>
                <Toggle />
            </div>
        </div>
    )
}

