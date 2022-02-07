import React from 'react';
import { Link } from 'react-router-dom';

import home_icon from '../asset/icon/home.svg'
import gallery_icon from '../asset/icon/aperture.svg'
import project_icon from '../asset/icon/layers.svg'
import code_icon from '../asset/icon/code.svg'

export default function Navbar() {
    return (
        <div className='flex justify-center'>
            <div className='navbar frosted_glass fixed top-10 flex items-center gap-7 px-5 py-2 rounded-lg'>
                <Link to="/">
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

