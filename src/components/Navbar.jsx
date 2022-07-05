import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <div className={`w-1/2 bg-[#fff] dark:bg-[#030305c4] backdrop-filter backdrop-blur-lg z-50 fixed top-5 flex items-center justify-between px-5 py-2 rounded-2xl duration-200 hover:shadow-md shadow ${show && 'top-5 opacity-0 duration-200'}`}>
                <div className='flex gap-5'>
                    <Link to="/" >
                        <div className='group p-3.5 rounded-md'>
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]" whileHover={{scale: 1.2}} transition={{ type: 'spring', duration: 0.1 }}>
                                <motion.path fill="none" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" ></motion.path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </motion.svg>
                        </div>
                    </Link>
                    <Link to="/project">
                        <div className='group p-3.5 rounded-md '>
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]" whileHover={{scale: 1.2}} transition={{ type: 'spring', duration: 0.1 }}>
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </motion.svg>
                        </div>
                    </Link>
                    <Link to="/code">
                        <div className='group p-3.5 rounded-md '>
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]" whileHover={{scale: 1.2}} transition={{ type: 'spring', duration: 0.1 }}>
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </motion.svg>
                        </div>
                    </Link>
                    <Link to="/event">
                        <div className='group p-3.5 rounded-md '>
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] fill-transparent stroke-[#6B7280] group-hover:stroke-[#dcdee1] dark:stroke-[#cccbcb] dark:hover:stroke-[#6B7280] duration-200 stroke-[1.4]" whileHover={{scale: 1.2}} transition={{ type: 'spring', duration: 0.1 }}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                            </motion.svg>
                        </div>
                    </Link>
                </div>
                <Toggle />
            </div>
        </div>
    )
}

