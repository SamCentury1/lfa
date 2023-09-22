import React from 'react'
import "./FooterView.css"

import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

const FooterView = () => {
    return (
        <div className='footer-view-outside-container'>
            <div className='footer-view-main-container'>
                <div className='footer-view-container'>

                    {/* HEADER */}
                    <div className='footer-view-header-container'>
                        <div className='footer-view-header'>Language Fluency Academy</div>
                    </div>

                    {/* CONTENT */}
                    <div className='footer-view-content-container' >

                        <div className='footer-view-content-item-container'>
                            <div className='footer-view-content-item-header'>About</div>

                            <div className='footer-view-content-item'>Experience</div>
                            <div className='footer-view-content-item'>Locations</div>
                        </div>


                        <div className='footer-view-content-item-container'>
                            <div className='footer-view-content-item-header'>Tutoring</div>

                            <div className='footer-view-content-item'>Private Sessions</div>
                            <div className='footer-view-content-item'>Group Sessions</div>
                        </div>


                        <div className='footer-view-content-item-container'>
                            <div className='footer-view-content-item-header'>Courses</div>

                            <div className='footer-view-content-item'>4-week Programs</div>
                            <div className='footer-view-content-item'>8-week Programs</div>
                            <div className='footer-view-content-item'>12-week Programs</div>

                        </div>


                        <div className='footer-view-content-item-container'>
                            <div className='footer-view-content-item-header'>Immersive Trips</div>

                            <div className='footer-view-content-item'>France</div>
                            <div className='footer-view-content-item'>Italy</div>
                            <div className='footer-view-content-item'>Spain</div>
                            <div className='footer-view-content-item'>Mexico</div>
                        </div>  
                                                                 
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className='footer-view-bottom-container'>
                        <div className='footer-view-bottom'>
                            <AiIcons.AiOutlineTwitter className='footer-view-bottom-icon'/>
                            <AiIcons.AiFillFacebook className='footer-view-bottom-icon'/>
                            <AiIcons.AiFillInstagram className='footer-view-bottom-icon'/>
                            <AiIcons.AiFillLinkedin className='footer-view-bottom-icon'/>
                            <FaIcons.FaTiktok className='footer-view-bottom-icon'/>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default FooterView