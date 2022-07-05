import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

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
      <div className='bg-[#f2f2f7] text-[#282a2f] dark:text-[#cccbcb] dark:bg-[#10101A] duration-200 h-screen jakarta-400 tracking-wide flex flex-col items-center gap-72 py-10'>
        <div className='reveal'>
          <p>{article.fields.name}</p>
          {
            hour < 10 ? <p>Hello, Good Morning</p> :
            hour < 18 ? <p>Hello, Good Afternoon</p> : 
            <p>Hello, Good Night</p>
          }
        </div>
        <div className='relative'>
          <div className='flex items-center gap-10'>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="1000">
              <Link to="/">
                <div className='bg-[#E5E5EA] dark:bg-[#030305] duration-200 navigation-button p-5 rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-transparent stroke-[#6B7280] dark:stroke-[#cccbcb] stroke-[1.6]"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
              </Link>
              <p className='navigation-text text-[13px]'>Home</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <Link to="/project">
                <div className='bg-[#E5E5EA] text-black dark:text-white dark:bg-[#030305] duration-200 navigation-button p-5 rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-transparent stroke-[#6B7280] dark:stroke-[#cccbcb] stroke-[1.6]"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
              </Link>
              <p className='navigation-text text-[13px]'>Project</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <Link to="/code">
                <div className='bg-[#E5E5EA] dark:bg-[#030305] duration-200 navigation-button p-5 rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-transparent stroke-[#6B7280] dark:stroke-[#cccbcb] stroke-[1.6]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
              </Link>
              <p className='navigation-text text-[13px]'>Cheatsheet</p>
            </div>
            <div className='navigation-box flex flex-col items-center gap-5 cursor-pointer' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <Link to="/event">
                <div className='bg-[#E5E5EA] dark:bg-[#030305] duration-200 navigation-button p-5 rounded-2xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="fill-transparent stroke-[#6B7280] dark:stroke-[#cccbcb] stroke-[1.6]"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                </div>
              </Link>
              <p className='navigation-text text-[13px]'>Event</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
