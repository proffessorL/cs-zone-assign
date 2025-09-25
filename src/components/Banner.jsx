import React from 'react';
import img1 from '../assets/vector1.png'
import img2 from '../assets/Group 1.png'


const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <div className="px-6 py-8">
            <div className="flex justify-between gap-4 w-full h-[250px] text-center  ">
               
               

                <div className=" flex-1 bg-gradient-to-br from-[#632EE3] to-[#b080f5] rounded-xl p-8 text-white relative ">
                    <img className=' absolute top-0 left-0  ' src={img1} alt="" />
                    <img className=' absolute right-0 top-0   ' src={img2} alt="" />
                    
                   
                    <div className=" text-white">
                        <h3 className="text-3xl font-medium mb-2">In-Progress</h3>
                        <div className="text-5xl font-bold">{inProgressCount}</div>
                    </div>
                </div>
              

               
                <div className=" flex-1 bg-gradient-to-br from-[#8dfca0] to-[#00827A] rounded-xl p-8 text-white relative overflow-hidden">
                     <img className=' absolute top-0 left-0  ' src={img1} alt="" />
                    <img className=' absolute right-0 top-0   ' src={img2} alt="" />
                    <div className="text-center">
                        <h3 className="text-3xl font-medium mb-2">Resolved</h3>
                        <div className="text-5xl font-bold">{resolvedCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;