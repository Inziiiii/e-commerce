import React from 'react'

const HomeSection = () => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 '>

      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/612/612/kwwfte80/ethnic-set/o/c/o/m-kd4gn4028-indo-era-original-imag9h2xxzn3abwk.jpeg?q=70" alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text'>Zara</h3>
        <p className='mt-2 text-sm text-gray-500'>stylish branded unisex clothing</p>
      </div>


    </div>
  )
}

export default HomeSection



