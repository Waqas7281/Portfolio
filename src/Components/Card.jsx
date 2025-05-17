import React, { useState } from 'react';

const Card = () => {
  const [data, setData] = useState([
    {
      titel: "Web-Site Design",
      frameWork: "React js ",
    },
    {
      titel: "Backend Developer",
      frameWork: "Node js + Nest js",
    },
    {
      titel: "Optimization",
      frameWork: "Fast Loading"
    }
  ]);

  return (
    <>
      <div className='flex flex-wrap gap-[3rem] sm:gap-[5rem] justify-center' id='services'>
         {
        data.map((item,index)=>{
          return(
            <div className='border-2 border-gray-900 bg-gray-900 sm:grid-cols-3 h-[12rem] w-[18rem] rounded-xl' key={index}>
              <p className='text-[85%] flex justify-center pt-[10%] font-bold text-orange-500'>{item.titel}</p>
              <p className='text-[85%]  flex justify-center font-bold pt-[10%]' >{item.frameWork}</p>
            </div>
          )
        })
       }
      </div>
    </>
  );
}

export default Card;
