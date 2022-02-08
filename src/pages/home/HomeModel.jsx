import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import home_icon from '../../asset/icon/home.svg'
import gallery_icon from '../../asset/icon/aperture.svg'
import project_icon from '../../asset/icon/layers.svg'
import code_icon from '../../asset/icon/code.svg'

export default class HomeModel extends Component {
  state = {
    hour: null
  }
  
  componentDidMount() {
    this.getHour()
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours()
    this.setState({
        hour
    });
  }
  render() {
    const {article} = this.props
    const {hour} = this.state
    AOS.init();
    return (
      <div className='text-white text_poppins_200 text-13 letterspacing-1 flex flex-col items-center gap-72 py-10'>
        <div className='reveal'>
          {
            hour < 10 ? <p>Hello, Good Morning</p> :
            hour < 18 ? <p>Hello, Good Afternoon</p> : 
            <p>Hello, Good Night</p>
          }
          <p>{article.fields.name}</p>
        </div>
        <div className='navigation absolute'>
          <div className='flex items-center gap-10'>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="500">
              <Link to="/">
                <div className='bg-black-2 navigation-button p-3.5 rounded-xl inner-shadow'>
                  <img src={home_icon} alt="" width={20}/>
                </div>
              </Link>
              <p className='navigation-text'>Home</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
              <Link to="/project">
                <div className='bg-black-2 navigation-button p-3.5 rounded-xl inner-shadow'>
                  <img src={project_icon} alt="" width={20} />
                </div>
              </Link>
              <p className='navigation-text'>Exploration</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
              <Link to="/code">
                <div className='bg-black-2 navigation-button p-3.5 rounded-xl inner-shadow'>
                  <img src={code_icon} alt="" width={20} />
                </div>
              </Link>
              <p className='navigation-text'>Cheatsheat</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
              <Link to="/event">
                <div className='bg-black-2 navigation-button p-3.5 rounded-xl inner-shadow'>
                  <img src={gallery_icon} alt="" width={20} />
                </div>
              </Link>
              <p className='navigation-text'>Event</p>
            </div>
          </div>
        </div>
        <div className='status absolute'>
          <div className='flex flex-col items-center'>
            <a href={"" + article.fields.hyperlink} target={'_blank'} rel="noreferrer" className='logo'>
              <img src={"https:" + article.fields.logo.fields.file.url} alt="" width={48} className='rounded-xl'/>
            </a>
            <div className='box flex gap-1'>
              <span className='pulse h-1.5 w-1.5 bg-green-300 rounded-full'></span>
              <a href={"" + article.fields.hyperlink} target={'_blank'} rel="noreferrer" className='hover:underline'>{article.fields.status}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
