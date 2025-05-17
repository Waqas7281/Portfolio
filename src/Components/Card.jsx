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
      <div className='flex flex-row gap-[5rem] justify-center' id='services'>
         {
        data.map((item,index)=>{
          return(
            <div className='border-2 border-gray-900 bg-gray-900 grid-cols-3 h-[12rem] w-[18rem] rounded-xl'>
              <p className='text-[75%] flex justify-center pt-[10%] text-orange-500'>{item.titel}</p>
              <p className='text-[70%]  flex justify-center pt-[10%]' >{item.frameWork}</p>
            </div>
          )
        })
       }
      </div>
    </>
  );
}

export default Card;
