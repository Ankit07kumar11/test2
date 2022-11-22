import React from 'react';
import { AiTwotoneEnvironment,AiFillBell,AiOutlineShoppingCart,AiOutlineAudio} from "react-icons/ai";
import {BiSearch} from "react-icons/bi"


const Header = () => {
  return (
    
      <>
        <div className="nav bg-[#14b8a6]  overflow-hidden position">
          <div className="upperline mx-1 py-4 flex  overflow-x-hidden overflow-hidden justify-between">

            <div className="location flex space-x-1 pl-2 md:space-x-6 lg:space-x-10  ">
              <AiTwotoneEnvironment className='text-white text-2xl md:text-3xl '  />

              <input className='  border-2  w-64 h-8 placeholder:text-white rounded-lg bg-inherit text-white  md:w-96 text-2xl  ' type="text" placeholder='  Your  Location' />

            </div>

            <div className="icon2 flex space-x-2 pr-2 sm:space-x-5 ">
              <div className="notification">
                <AiFillBell className='text-white text-2xl sm:text-3xl' />
              </div>

              <div className="cart">
                <AiOutlineShoppingCart className='text-white text-2xl sm:text-3xl'  />
              </div>

            </div>

          </div>

        </div>

        <div className="nav2 overflow-x-hidden sticky top-0 z-50 ">

            <div className="lowerline  px-6 pt-2 pb-2 flex items-center justify-between bg-[#14b8a6] sticky overflow-x-hidden ">
                <div className="bg-white border flex items-center gap-5 rounded-md px-2 sm:px-5">
                    <BiSearch className='text-2xl text-[#14b8a6] sm:text-3xl'/>
                    <input type="text" className='border-none w-full  px-3 py-1.5 outline-none sm:w-96 ' placeholder=' Search any Products...' />
                    
                </div>

                <div>
                    <AiOutlineAudio className="text-white text-2xl sm:text-3xl  "/>
                </div>

          </div>
        </div>
      </>

    
  )
}

export default Header
