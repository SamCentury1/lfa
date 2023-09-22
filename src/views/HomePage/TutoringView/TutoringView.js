import React from 'react'
import './TutoringView.css'

import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import {motion} from 'framer-motion'

const TutoringView = () => {

    const zoomImg = require('../../../assets/img/zoom.png')

    return (
        <div className='tutoring-view-outside-container'>
            <div className='tutoring-view-main-container'>
                <div className='tutoring-view-header'>
                    <div className='tutoring-view-header-text-container'>
                        <div className='tutoring-view-header-text'>
                            Flexible Learning Formats
                        </div>
                        <div className='tutoring-view-header-underline-container'>

                            <motion.div 
                                className='tutoring-view-header-underline'
                                initial={{width:0}}
                                whileInView={{width:"100%"}}
                                transition={{duration:0.8}}
                            ></motion.div>
                        </div>

                    </div>
                </div>
                <div className='tutoring-view-content'>
                    
                    <motion.div 
                        className='tutoring-view-content-card-container'
                        initial={{x:50, opacity:0}}
                        whileInView={{x:0, opacity:1, transition:{duration:0.5, delay:0.3}}}
                    >
                        <motion.div 
                            className='tutoring-view-content-card'
                            whileHover={{backgroundColor:"#ffffffa6"}}
                        >
                            <div className='tutoring-view-content-card-icons-container'>
                                <div className='tutoring-view-content-card-icon'>
                                    <BsIcons.BsPersonFill/>
                                </div>
                                <div className='tutoring-view-content-card-icon'>
                                    <BsIcons.BsPeopleFill/>
                                </div>
                            </div>
                            <div className='tutoring-view-content-card-content-container'>
                                <div className='tutoring-view-content-card-content-header'>Private or Group Sessions</div>
                                <div className='tutoring-view-content-card-content-text'>
                                    Whether you your child learn better in privates sessions or with a group,
                                    book the sessions you want
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='tutoring-view-content-card-container'
                        initial={{x:50, opacity:0}}
                        whileInView={{x:0, opacity:1, transition:{duration:0.5, delay:0.6}}}
                    >
                        <motion.div 
                            className='tutoring-view-content-card'
                            whileHover={{backgroundColor:"#ffffffa6"}}
                        >
                            <div className='tutoring-view-content-card-icons-container'>
                                <div className='tutoring-view-content-card-icon'>
                                    <BsIcons.BsPersonFill/>
                                </div>
                                <div className='tutoring-view-content-card-icon'>
                                    <BsIcons.BsFillLaptopFill/>
                                </div>
                            </div>
                            <div className='tutoring-view-content-card-content-container'>
                                <div className='tutoring-view-content-card-content-header'>In-Person or Virtual</div>
                                <div className='tutoring-view-content-card-content-text'>
                                    Based in St-Louis Missouri, in-person sessions are available for groups or private
                                    lessons.
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='tutoring-view-content-card-container'
                        initial={{x:50, opacity:0}}
                        whileInView={{x:0, opacity:1, transition:{duration:0.5, delay:0.9}}}
                    >
                        <motion.div 
                            className='tutoring-view-content-card'
                            whileHover={{backgroundColor:"#ffffffa6"}}
                        >
                            <div className='tutoring-view-content-card-icons-container'>
                                <div className='tutoring-view-content-card-icon'>
                                    <FaIcons.FaBaby/>
                                </div>
                                <div className='tutoring-view-content-card-icon'>
                                    <FaIcons.FaAccessibleIcon/>
                                </div>
                            </div>
                            <div className='tutoring-view-content-card-content-container'>
                                <div className='tutoring-view-content-card-content-header'>All Age Groups</div>
                                <div className='tutoring-view-content-card-content-text'>
                                    Teaching experience with all age groups, as young as 4 years old to 77 years young.
                                    Can you beat that record?
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>                                     
                </div>
            </div>

            <motion.img 
                src={zoomImg} 
                alt="" 
                className='tutoring-view-background-image'
                initial={{x:"-100%",y:-50,opacity:0}}
                whileInView={{x:"-100%", y:100, opacity:1}}
                transition={{delay: 0.1,duration:0.7}}
            />
        </div>
    )
}

export default TutoringView