import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faUser,faTableList,faComment } from "@fortawesome/free-solid-svg-icons"

const Foot = () => {

  const icons = [
    {
      id: 1,
      img: faHouse,
      desc:"Home"
    },
    {
      id: 2,
      img: faUser,
      desc:"Profile"
    },
    {
      id: 3,
      img: faTableList,
      desc:"Follow List"
    },
    {
      id: 4,
      img: faComment,
      desc:"Chat"
    },

  ]
  return (
    <div>
      <>
        <div className="foot  fixed bottom-0 z-50 bg-white  h-14 flex justify-around items-center w-full ">
          {
            icons.map(d => {
              return (

                <div key={d.id} className="flex flex-col pt-4 px-3 text-[#14b8a6] justify-around ">

                  <FontAwesomeIcon icon={d.img} className="text-lg"></FontAwesomeIcon>
                  <span>{d.desc}</span>
                </div>
              )
            })}


        </div>

      </>

    </div>
  )
}

export default Foot
