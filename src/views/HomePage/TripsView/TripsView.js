import React, { useState } from 'react'
import './TripsView.css'
import {motion, LayoutGroup } from 'framer-motion'


const TripsView = () => {

    const franceBgImg = require('../../../assets/img/france_bg.jpg')
    const italyBgImg = require('../../../assets/img/italy_bg.jpeg')
    const spainBgImg = require('../../../assets/img/spain_bg.jpg')

    // const [selectedTrip, setSelectedTrip]= useState('fr')
    const  [selected, setSelected] = useState(0)

    const backgroundVariants = {
        active: {
            opacity:1,
            transition: {
                duration: 0.9
            }
        },
        inactive: {
            opacity:0,
            transition: {
                duration: 0.9
            }
        }
    } 
 
    
    const menuItems = ['France', 'Italy', 'Spain']

    return (
        <div className='trips-view-outside-container'>
            {/* <div className='trips-view-inside-container'> */}

                <div className='trips-view-background-images'>
                    <motion.img 
                        src={franceBgImg} 
                        alt='' 
                        className='trips-view-content-element-image'
                        variants={backgroundVariants}
                        animate={selected === 0 ? 'active' : 'inactive'}
                    />
                    <motion.img 
                        src={italyBgImg} 
                        alt='' 
                        className='trips-view-content-element-image'
                        variants={backgroundVariants}
                        animate={selected === 1 ? 'active' : 'inactive'}
                    />
                    <motion.img 
                        src={spainBgImg} 
                        alt='' 
                        className='trips-view-content-element-image'
                        variants={backgroundVariants}
                        animate={selected === 2 ? 'active' : 'inactive'}
                    /> 
                </div>
                <div className='trips-view-main-container'>
                    <div className='trips-view-header'>
                        <div className='trips-view-header-text-container'>
                            <div className='trips-view-header-text'>
                                Immersive Trips
                            </div>
                            <div className='trips-view-header-underline-container'>
                                <motion.div 
                                    className='trips-view-header-underline'
                                    initial={{width:0}}
                                    whileInView={{width:"100%"}}
                                    transition={{duration:0.8}}
                                ></motion.div>
                            </div>
                        </div>
                        <div className='trips-view-header-item-container' >
                            {
                                <div className="underlined-menu">
                                <div className="wrapper">
                                <LayoutGroup>
                                    {menuItems.map((el, i) => (
                                    <MenuItem 
                                        text={el} 
                                        key={i}
                                        selected={selected === i}
                                        onClick={() => setSelected(i)}

                                    /> 
                                    ))}
                                </LayoutGroup>
                                </div>
                            </div>                                
                            }
                        </div>
                    </div>

                    <div className='trips-view-content'>
                        <FranceContent selected={selected === 0} variants={backgroundVariants}  />
                        <ItalyContent selected={selected === 1} variants={backgroundVariants} />
                        <SpainContent selected={selected === 2} variants={backgroundVariants} />
                        {/* <div className='trips-view-content-element'>


                        </div> */}
                    </div>
                </div>
            </div>
        // </div>
    )
}



const MenuItem = ({text,selected,onClick}) => (
    <motion.div 
    className="menu-item" 
    onClick={onClick} 
    animate={{ opacity: selected ? 1 : .5}}
  >
    {text}
    {selected && (
      <motion.div 
        className="underline" 
        layoutId="underline" 
      />
    )}
  </motion.div>
)




const FranceContent = ({selected,variants}) => {
    const parisSvg = require('../../../assets/img/Eiffel-Tower-Silhouette.svg')
    const lyonSvg = require('../../../assets/img/lyon_svg.svg')
    const grenobleSvg = require('../../../assets/img/grenoble_svg.svg')

    return (
        <motion.div 
            className='trips-view-content-element'
            variants={variants}
            animate={selected  ? 'active' : 'inactive'}        
        >
            <div className='trips-view-content-element-heading' >
                Learn the language by immersing yourself in the country's cities and villages
            </div>
            <div className='trips-view-content-element-sub-heading' >
                Find out more about travelling to France
            </div>         
            <div className='trips-view-content-element-items' >
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Paris</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={parisSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Lyon</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={lyonSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Grenoble</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={grenobleSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
            </div>

        </motion.div>        
    )
}

const ItalyContent = ({selected,variants}) => {
    const romeSvg = require('../../../assets/img/rome_svg.svg')
    const milanSvg = require('../../../assets/img/milan_svg.svg')
    const veniceSvg = require('../../../assets/img/venice_svg.svg')

    return (
        <motion.div 
            className='trips-view-content-element'
            variants={variants}
            animate={selected  ? 'active' : 'inactive'}        
        >
            <div className='trips-view-content-element-heading' >
                Learn the language by immersing yourself in the country's cities and villages
            </div>
            <div className='trips-view-content-element-sub-heading' >
                Find out more about travelling to Italy
            </div>         
            <div className='trips-view-content-element-items' >
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Rome</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={romeSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Milan</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={milanSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Venice</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={veniceSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
            </div>

        </motion.div>        
    )
}


const SpainContent = ({selected,variants}) => {
    const madridSvg = require('../../../assets/img/madrid_svg.svg')
    const barcelonaSvg = require('../../../assets/img/barcelona_svg.svg')
    const valenciaSvg = require('../../../assets/img/valencia_svg.svg')

    return (
        <motion.div 
            className='trips-view-content-element'
            variants={variants}
            animate={selected  ? 'active' : 'inactive'}        
        >
            <div className='trips-view-content-element-heading' >
                Learn the language by immersing yourself in the country's cities and villages
            </div>
            <div className='trips-view-content-element-sub-heading' >
                Find out more about travelling to Spain
            </div>         
            <div className='trips-view-content-element-items' >
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Madrid</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={madridSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Barcelona</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={barcelonaSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
                <div className='trips-view-content-element-item'>
                    <div className='trips-view-content-element-item-title'>Valencia</div>
                    <div className='trips-view-content-element-item-content'>
                        <img src={valenciaSvg.default} alt='' className='city-icon' />
                    </div>
                </div>
            </div>

        </motion.div>        
    )
}




export default TripsView