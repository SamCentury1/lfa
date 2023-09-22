import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = ({visible}) => {

    const image = require('../../assets/img/lfa-logo.png')
    const navigate = useNavigate()


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    console.log(screenWidth)    

    if (screenWidth > 900) {

        return (
            <motion.div 
                className='navbar-main-container'
                initial={{y:0}}
                animate={visible ? {y:0} : {y:-100, transition:{delay:1}}}
            > 
                <div className='navbar-inside-container'>
                    <div 
                        className='navbar-brand-container'
                        onClick={() => navigate('/')}
                    >
                        <div className='navbar-brand-logo-container'>
                            <img  src={image} alt="" className='navbar-brand-logo' />
                        </div>
                        <div className='navbar-brand-name'>
                            Language Fluency Academy
                        </div>
                    </div>
                    <ul className='navbar-items-container'>
                        <motion.li
                            className='navbar-item'
                            whileHover={{color:"#eeeeee"}}
                            onClick={() => navigate('/about')}
                        >
                            About
                        </motion.li>
                        
                        <motion.li
                            className='navbar-item'
                            whileHover={{color:"#eeeeee"}}
                            onClick={() => navigate('/tutoring')}
                        >
                            Tutoring
                        </motion.li>
                        
                        <motion.li
                            className='navbar-item'
                            whileHover={{color:"#eeeeee"}}
                            onClick={() => navigate('/courses')}
                        >
                            Courses
                        </motion.li>
                        
                        <motion.li
                            className='navbar-item'
                            whileHover={{color:"#eeeeee"}}
                            onClick={() => navigate('/trips')}
                        >
                            Trips
                        </motion.li>
                        
                        <motion.li
                            className='navbar-item'
                            whileHover={{color:"#eeeeee"}}
                            onClick={() => navigate('/reviews')}
                        >
                            Reviews
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        )
    } else {
        <div>nav</div>
    }
}

export default NavBar