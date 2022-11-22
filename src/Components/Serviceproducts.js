import React from 'react'

const Serviceproducts = () => {
    const servicedata1=[
        {
            id:1,
            image:"http://sc04.alicdn.com/kf/Uf66109c58c8a417e87a6e3ac5d15b145V.jpg",
            desc:"Suit (3 pics-Blazer, Trouser &Shirt)"
        },
        {
            id:2,
            image:"https://4.imimg.com/data4/EW/IX/MY-36718954/photo-blankets-4-500x500.jpg",
            desc:"BLANKET DOUBLE"
        },
    ]

    const servicedata2=[
        {
            id:1,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wwgdAltsp9IF6-2lfdE2ZEW_wJ1Kpb8D1Q&usqp=CAU",
            desc:"Eritel 80-AM"
        }
    ]

  

    return (
        <div>

            <div className="heading bg-[#9dd5cf] h-12 flex items-center justify-center mx-2 my-2">
                <h2 className='text-[#14b8a6] text-2xl'>Popular Service Products</h2>

            </div>


            <div className="service1 flex flex-col">
                <span className=' text-slate-600 text-xl flex  justify-center'>Laundry</span>
                <hr className='mx-20 bg-black h-0.5' />

                <div className="flex">
                    {
                        servicedata1.map(sd1=>{
                            return(

                                <div key={sd1.id} className=" mx-2 my-3 services h-46 w-36 flex flex-col border-2 bg-white">
                        <img className='w-32 h-32 py-2 px-2' src={sd1.image} alt="" />
                        <span className='whitespace-pre-wrap px-2 py-2'>{sd1.desc}</span>
                    </div>

                            )
                        })
                    }



                </div>

            </div>


            <div className="service2 flex flex-col">
                <span className=' text-slate-600 text-xl flex  justify-center'>Health</span>
                <hr className='mx-20 bg-black h-0.5' />

                <div className="flex">
                    {
                        servicedata2.map(sd2=>{
                            return(

                                <div key={sd2.id} className=" mx-2 my-3 services h-46 w-36 flex flex-col border-2 bg-white">
                        <img className='w-32  py-2 px-2' src={sd2.image} alt="" />
                        <span className='whitespace-pre-wrap px-2 py-2'>{sd2.desc}</span>
                    </div>

                            )
                        })
                    }

                </div>

            </div>


        </div>
    )
}

export default Serviceproducts
