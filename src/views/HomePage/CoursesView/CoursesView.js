import React, { useState } from 'react'
import './CoursesView.css'
import {motion} from 'framer-motion'





const CoursesView = () => {

    const [hoverController4, setHoverController4] = useState(false)
    const [hoverController8, setHoverController8] = useState(false)
    const [hoverController12, setHoverController12] = useState(false)


    const cardNumberVariants = {
        active: {
            'backgroundColor':'#FFFFFF',
            'color': '#222222',
        },
        inactive: {
            'backgroundColor':'#222222',
            'color': '#ffffff',            
        }
    }

    const cardDividerVariants = {
        active: {
            width: '100%'
        },
        inactive: {
            width: '0%'
        } 
    }


    return (
        <div className='courses-view-outside-container'>
            <div className='courses-view-main-container'>
                <div className='courses-view-header'>
                    <div className='courses-view-header-text-container'>
                        <div className='courses-view-header-text'>
                            Courses & Plans 
                        </div>
                        <div className='courses-view-header-underline-container'>
                            <motion.div 
                                className='courses-view-header-underline'
                                initial={{width:0}}
                                whileInView={{width:"100%"}}
                                transition={{duration:0.8}}
                            ></motion.div>
                        </div>
                    </div>
                </div>
                <div className='courses-view-content'>
                    <motion.div 
                        className='courses-view-content-element'
                        initial={{x:-100, y:-100, opacity:0}}
                        whileInView={{x:0, y:-100, opacity:1,transition:{duration:0.5, delay:0.4}}}
                        onHoverStart={() => setHoverController4(true)}
                        onHoverEnd={() => setHoverController4(false)}
                        whileHover={{scale:1.1}}     
                    >
                        <div className='courses-view-content-element-heading'>4-week courses</div>
                        <div className='courses-view-content-element-decoration'>
                            <motion.div 
                                className='courses-view-content-decoration-item'
                                animate={hoverController4 ? 'active' : 'inactive'}
                                variants={cardNumberVariants}
                            >
                                4
                            </motion.div>
                            <motion.div 
                                className='courses-view-content-decoration-divider'
                                animate={hoverController4 ? 'active' : 'inactive'}
                                variants={cardDividerVariants}
                            ></motion.div>
                        </div>
                        <div className='courses-view-content-element-body'>
                            For a quick preparation for a business, leisure, or school trip.
                            Learn fundamental sentences and grammatical rules.
                        </div>
                    </motion.div>

                    <motion.div 
                        className='courses-view-content-element'
                        initial={{x:-100, y:50, opacity:0}}
                        whileInView={{x:0, y:50, opacity:1,transition:{duration:0.5, delay:0.7}}}
                        onHoverStart={() => setHoverController8(true)}
                        onHoverEnd={() => setHoverController8(false)}
                        whileHover={{scale:1.1}}                      
                    >
                        <div className='courses-view-content-element-heading'>8-week courses</div>
                        <div className='courses-view-content-element-decoration'>
                            <motion.div 
                                className='courses-view-content-decoration-item'
                                animate={hoverController8 ? 'active' : 'inactive'}
                                variants={cardNumberVariants}
                            >
                                8
                            </motion.div>
                            <motion.div 
                                className='courses-view-content-decoration-divider'
                                animate={hoverController8 ? 'active' : 'inactive'}
                                variants={cardDividerVariants}
                            ></motion.div>
                        </div>                        
                        <div className='courses-view-content-element-body'>
                            To prepare for a trip or course. Learn the fundamentals, grammatical rules, and
                            basic conjugation.
                        </div>
                    </motion.div>

                    <motion.div 
                        className='courses-view-content-element'
                        initial={{x:-100, y:200, opacity:0}}
                        whileInView={{x:0, y:200, opacity:1,transition:{duration:0.5, delay:1}}}
                        onHoverStart={() => setHoverController12(true)}
                        onHoverEnd={() => setHoverController12(false)}
                        whileHover={{scale:1.1}}                         
                    >
                        <div className='courses-view-content-element-heading'>12-week courses</div>
                        <div className='courses-view-content-element-decoration'>
                            <motion.div 
                                className='courses-view-content-decoration-item'
                                animate={hoverController12 ? 'active' : 'inactive'}
                                variants={cardNumberVariants}
                            >
                                12
                            </motion.div>
                            <motion.div 
                                className='courses-view-content-decoration-divider'
                                animate={hoverController12 ? 'active' : 'inactive'}
                                variants={cardDividerVariants}
                            ></motion.div>
                        </div>                        
                        <div className='courses-view-content-element-body'>
                            For weekly assistance in university and college courses. Learning the fundamentals,
                            conjugation, grammar, and cultural elements key to communication.
                        </div>
                    </motion.div>
                </div>
                <div className='courses-view-bottom-container'>
                    <motion.div 
                        className='courses-view-bottom-body'
                        initial={{y:0,x:-50, opacity:0}}
                        whileInView={{y:-130, x:-50, opacity:1,transition:{duration:0.5, delay:0.5}}}
                    >
                        <div className='courses-view-bottom-text'>
                            Courses & programs are made to fit to a particuar objective and are completely customizable.

                        </div>
                    </motion.div>
                </div>


                           
            </div>
        </div>
    )
}

export default CoursesView