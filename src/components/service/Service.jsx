import React from 'react'
import "./service.css"
import {FaImage} from "react-icons/fa"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsGlobe} from "react-icons/bs"


const Service = () => {
  return (
    <div className='services'>
        <div className="service">
            <FaImage className='service-icon'/>
            <p>Adventure</p>
        </div>
        <div className="service">
            <BsFillBuildingsFill className='service-icon'/>
            <p>Family tour</p>
        </div>
        <div className="service">
            <BsFillPeopleFill className='service-icon'/>
            <p>City cards</p>
        </div>
        <div className="service">
            <BsGlobe className='service-icon'/>
            <p>Multy-day trips</p>
        </div>
    </div>
  )
}

export default Service