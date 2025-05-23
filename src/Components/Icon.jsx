import React from 'react';

const Icon = () => {
  const images = [
    { img: '/images/ins.png' },
    { img: '/images/lin.png' },
    { img: '/images/dri.png' },
    { img: '/images/be.png' }
  ];

  return (
    <div className='flex gap-2 mt-2'>
      {images.map((item, index) => (
        <img
          key={index}
          src={item.img}
          alt="icon"
          className='border-2 h-6 w-6 rounded-full border-gray-500'
        />
      ))}
    </div>
  );
};

export default Icon;
