import React, { useState } from 'react'
import './IntroView.css'
import {motion} from 'framer-motion'

const IntroView = () => {

    // const image = require('../../../assets/img/Screenshot_2023-08-16_184344-removebg-preview.png')
    const image = require('../../../assets/img/pngegg.png')

    const frenchFlag = require('../../../assets/img/Flag_of_France.svg').default
    const [hoverFr, setHoverFr] = useState(false)

    const italianFlag = require('../../../assets/img/Flag_of_Italy.svg').default
    const [hoverIt, setHoverIt] = useState(false)

    const spanishFlag = require('../../../assets/img/Flag_of_Spain.svg').default
    const [hoverEs, setHoverEs] = useState(false)

    const flagHoverVariants = {
        active: {
            scale: 1.1, 
            y: -10,
            opacity:1,
            transition: {
                duration: 0.2
            }
        },
        inactive: {
            scale: 1, 
            y: 0,
            opacity:0         
        }
    }

    return (
        <div className='intro-view-outside-container'>
            <div className='intro-view-container'>
                <div className='intro-view-content-container'>
                    <div className='intro-view-content-text-container'>
                        <motion.div 
                            className='intro-view-content-text'
                            initial={{y:-20, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration: 0.5}}
                        >
                            Your multi-lingual journey is an adventure...
                        </motion.div>
                        <div className='intro-view-cards'>


                            <motion.div 
                                className='intro-view-card-conainer'
                                initial={{x:-20, y:150, opacity:0}}
                                whileInView={{x:-20, y:0, opacity:1}}
                                transition={{delay:0, duration:1}}

                            >

                                <motion.img 
                                    src={spanishFlag} 
                                    alt='' 
                                    className='intro-view-card-content-image'
                                    animate={hoverEs ? 'active' : 'inactive'}
                                    variants={flagHoverVariants}
                                />                                
                                <motion.div 
                                    className='intro-view-card-content'
                                    whileHover={{scale: 1.1, y: -10, transition:{duration:0.2}}}
                                    onHoverStart={() => setHoverEs(true)}
                                    onHoverEnd={() => setHoverEs(false)}
                                >
                                    Spanish
                                </motion.div>
                            </motion.div>


                            <motion.div 
                                className='intro-view-card-conainer'
                                initial={{x:0, y:150, opacity:0}}
                                whileInView={{x:0, y:0, opacity:1}}
                                transition={{delay:0.5, duration:1}}

                            >   
                                <motion.img 
                                    src={frenchFlag} 
                                    alt='' 
                                    className='intro-view-card-content-image'
                                    animate={hoverFr ? 'active' : 'inactive'}
                                    variants={flagHoverVariants}
                                />
                                <motion.div 
                                    className='intro-view-card-content'
                                    whileHover={{scale: 1.1, y: -10, transition:{duration:0.2}}}
                                    onHoverStart={() => setHoverFr(true)}
                                    onHoverEnd={() => setHoverFr(false)}
                                >
                                    French
                                </motion.div>                                
                            </motion.div>


                            <motion.div 
                                className='intro-view-card-conainer'
                                initial={{x:20, y:150, opacity:0}}
                                whileInView={{x:20, y:0, opacity:1}}
                                transition={{delay:1, duration:1}}
                                // onMouseEnter={{scale : 1.1}}
                                // whileHover={hoverVariant}                     
                            > 
                                <motion.img 
                                    src={italianFlag} 
                                    alt='' 
                                    className='intro-view-card-content-image'
                                    animate={hoverIt ? 'active' : 'inactive'}
                                    variants={flagHoverVariants}
                                />                            
                                <motion.div 
                                    className='intro-view-card-content'
                                    whileHover={{scale: 1.1, y: -10, transition:{duration:0.2}}}
                                    onHoverStart={() => setHoverIt(true)}
                                    onHoverEnd={() => setHoverIt(false)}
                                >
                                    Italian
                                </motion.div>
                            </motion.div>                                   
                        </div>
                    </div>
                </div>
                <motion.div 
                    className='intro-view-image-container'
                    initial={{x:100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <img src={image} alt="" className='intro-view-image'/>
                </motion.div>
            </div>
        </div>
    )
}

export default IntroView