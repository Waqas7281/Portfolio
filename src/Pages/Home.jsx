import React,{useState} from 'react';
import Button from '../Components/Button';
import Services from './Services';
import About from './About';
const Home = () => {
  const [images,setImages] = useState([
    {
      img:'../../public/Ellipse.png',
    }
    ,
    {
      img:'../../public/Ellipse.png',
    },
    {
      img:'../../public/Ellipse.png',
    },
    {
      img:'../../public/Ellipse.png',
    }
    
  ])

    const [Data,setData] = useState([
    {
      exp:1,
      title:'Experience'
    }
    ,
    {
      exp:4,
      title:'Project Done'
    },
    {
      exp:'10+',
      title:'Clients'
    }
    
    
  ])

  return (
    <>
    <main className="text-white  mt-[5rem] flex sm:justify-between  flex-col" >
        <div className=''>
          <p className='font-Lato flex justify-center'>Hi I am</p>
          <h6 className='text-[1.2rem] font-Lato flex justify-center'>Waqas ali Shah</h6>
          <p className=' text-[1.7rem] sm:text-[2.5rem] text-orange-500 font-Lato font-bold flex justify-center  '>Web Developer</p>
          <div className='flex gap-2 mt-2 justify-center'>
             {
            images?.map((item,index)=>{
              return(
                  <img src={item.img} alt="no found" className='border-2 h-6 w-6 rounded-[50%] border-gray-500' key={index}/>
              )
            })
          }
          </div>
          <div className='mt-4 flex gap-5 justify-center'>
          <Button/>
          <button className='text-white border-[1px] px-4 py-1 rounded-md sm:ml-[5%] text-[10px] '>Dawnload Cv</button>
         </div>
         <div className='flex border-[1px] bg-slate-200  bg-opacity-20 h-[50%] mt-[4%] rounded-md  items-center justify-around'>
            {
              Data.map((item,index)=>{
                return(
                  <div key={index} className='flex float-left flex-col '  >
                  <p className='  text-orange-500  ' >{item.exp}</p>
                 <div className='flex gap-1 justify-center items-center pb-3'>
                   <p className=' text-white text-[10px]'>{item.title}</p>
                  <span className='border-2 h-[30px] border-l-0 border-t-0 border-b-0 flex '></span>
                 </div>
                  </div>
                )
              })
            }
         </div>
        </div>
        <div className='py-4  relative'>
         <img src="../public/images/el.png" alt=" no" />
         <img src="/images/w.png" alt="" className='absolute top-0 h-[75%] ' />
        </div>
    </main>
    <Services/>
    <About/>
    </>
  );
}

export default Home;
