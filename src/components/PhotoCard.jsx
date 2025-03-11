import React from 'react'

const PhotoCard = ({title, subtitle,className, src}) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center xl:h-full`}>
        <img src={src} className='rounded-[10rem] w-[60%] min-w-[15rem] h-[70%] object-cover mt-8 shadow-xl'/>
        <span className='text-5xl font-lexend mt-8 mb-4 text-gray-700 xl:text-7xl'>{title}</span>
        <span className='text-xl text-gray-600 xl:text-2xl'>{subtitle}</span>
    </div>
  )
}

export default PhotoCard