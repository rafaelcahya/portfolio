import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import home_icon from '../asset/icon/home.svg'
import gallery_icon from '../asset/icon/aperture.svg'
import project_icon from '../asset/icon/layers.svg'
import code_icon from '../asset/icon/code.svg'

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
            <div className={`navbar frosted_glass fixed top-5 flex items-center gap-7 px-5 py-2 rounded-lg ${show && 'top-5 opacity-0'}`}>
                <Link to="/" >
                    <div className='p-3 rounded-xl'>
                        <img src={home_icon} alt="" width={20} />
                    </div>
                </Link>
                <Link to="/project">
                    <div className='p-3 rounded-xl hover:bg-gray-900'>
                        <img src={project_icon} alt="" width={20} />
                    </div>
                </Link>
                <Link to="/code">
                    <div className='p-3 rounded-xl hover:bg-gray-900'>
                        <img src={code_icon} alt="" width={20} />
                    </div>
                </Link>
                <Link to="/event">
                    <div className='p-3 rounded-xl hover:bg-gray-900'>
                        <img src={gallery_icon} alt="" width={20} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

