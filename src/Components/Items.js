import React from 'react'
// import { Col, Row } from 'antd';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMobile,faTv,faIndianRupeeSign,faNewspaper ,faBlog,faPeopleGroup,faMessage,faFireFlameCurved,faLightbulb,faDroplet,faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"


const Items = () => {
    const data=[
    {
        id:1,
        icon:faMobile,
        desc:"Mobile Recharge"
    },
    {
        id:2,
        icon:faTv,
        desc:"DTH Recharge"
    },
    {
        id:3,
        icon:faIndianRupeeSign,
        desc:"Loans"
    },
    {
        id:4,
        icon:faNewspaper,
        desc:"Newspaper"
    },
    {
        id:5,
        icon:faBlog,
        desc:"Blogs"
    },
    {
        id:6,
        icon:faPeopleGroup,
        desc:"Jobs"
    },
    {
        id:7,
        icon:faMessage,
        desc:"Feedback"
    },
    {
        id:8,
        icon:faFireFlameCurved,
        desc:"Gas Booking"
    },

    {
        id:9,
        icon:faLightbulb,
        desc:"Electricity Bill"
    },
    {
        id:10,
        icon:faDroplet,
        desc:"Water Bill"
    },
    {
        id:11,
        icon:faChevronCircleRight,
        desc:"See More"
    },

]
  return (
    <div className=''>
        <div className="iconslist mx-2 my-2 overflow-x-hidden grid  grid-cols-3 items-center  sm:grid-cols-4 md:grid-cols-6 bg-white border-2 shadow-md ">
            
                {
                    data.map(d=>{
                        return( 

                            
                            <div key={d.id} className="content flex flex-col justify-center items-center px-4 py-5 gap-3  ">
                                <FontAwesomeIcon icon={d.icon} className="text-3xl md:text-2xl text-[#14b8a6] drop-shadow-sm overflow-x-hidden"></FontAwesomeIcon>
                                <span className='text-[#14b8a6] text-center'>{d.desc}</span>
                            </div>
        
                        
                        )
                    })
                }
   
           
        </div>
      
    </div>
  )
}

export default Items

