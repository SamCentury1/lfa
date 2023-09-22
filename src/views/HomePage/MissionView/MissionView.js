import React from 'react'
import './MissionView.css'

import {motion} from 'framer-motion'
import * as  FaIcons from 'react-icons/fa'
import * as  MdIcons from 'react-icons/md'
import * as  GiIcons from 'react-icons/gi'




const MissionView = () => {

    const aeroplaneImage = require('../../../assets/img/aeroplane.png')

    const missionCardContent = [
        {
            "name": "Brain Development",
            "iconKey": 0,
            "text": "The brain develops well into the mid-20s, and one of the best ways to help the brain develop and create new neural paths is to challenge oneself with learning a language"
        },

        {
            "name": "Professional Development",
            "iconKey": 1,
            "text": "Knowing a language makes professionals stand out in crowded fields of applicants. Business opportunities with new markets and demographics can help your career"
        },
        
        {
            "name": "Cultural Sensitivity",
            "iconKey": 2,
            "text": "There's no better way to connect with a new culure than to understand the dialect. Understanding how another language works can help understand more about the culture"
        },
    ]

    return (
        <div className='mission-view-outside-container'>
            <motion.img 
                src={aeroplaneImage} 
                alt="" 
                className='mission-view-background-image'
                initial={{y:150, x:-200, opacity:0}}
                animate={{y: 10, x:10, opacity: 1}}
                transition={{delay: 1,duration:2}}
            />
            <div className='mission-view-main-container'>
                <div className='mission-view-content-container'>


                    <div className='mission-view-content-head-container'>

                        <motion.div 
                            className='mission-view-content-text-container'
                            initial={{opacity:1, y:-50}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.7}}
                        >
                            <div className='mission-view-content-text'>
                                Learning a new language is an extremely beneficial endeavor which has key benefits in an increasingly
                                changing and globalized world.
                            </div>
                        </motion.div>

                        <motion.div 
                            className='mission-view-content-head-controls'
                            initial={{opacity:0, x:50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:1}}
                        >
                            {/* <motion.button 
                                className='mission-view-content-head-controls-button'
                                whileHover={{backgroundColor:"#ffffffa6", color: "#1f2687"}}
                            >
                                Learn More
                            </motion.button> */}
                        </motion.div>
                    </div>

                    <div className='mission-view-content-items-container'>
                        {
                            missionCardContent.map((e,index) => {
                                return <MissionCard key={index} data={e} />
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionView


const MissionCard = ({data}) => {



    const getProperIcon = (iconKey) => {
        if (iconKey === 0) {
            return <FaIcons.FaBrain/>
        } else if (iconKey === 1) {
            return < MdIcons.MdBusinessCenter />
        } else if (iconKey === 2) {
            return <FaIcons.FaGlobeAmericas />
        } else if (iconKey === 3) {
            return <GiIcons.GiThreeFriends/>
        }
    }

    return (
        <motion.div 
            className='mission-view-card-container'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay: (data.iconKey+1)*0.2}}
        >
            <motion.div 
                className='mission-view-card'
                whileHover={{backgroundColor: "#ffffffa6" }}
                // onHoverEnd={{backgroundColor: "##ffffff8c" }}

            >
                <div className='mission-view-card-header'>{data.name}</div>

                <div className='mission-view-card-icon'>{getProperIcon(data.iconKey)}</div>

                <div className='mission-view-card-divider'></div>

                <div className='mission-view-card-text'>{data.text}</div>
            </motion.div>
        </motion.div>
    )
}