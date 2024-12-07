import React from 'react'
import bgImage from '../../../public/images/background-hero.jpg'
import hero from '../../../public/images/hero.jpg'
import Navbar from '../Navbar'

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='w-full lg:w-[45%] relative'>
                <img className='w-full h-screen object-cover' src={bgImage.src} alt="" />
                <div className='absolute inset-0 flex flex-col'>
                    <Navbar />
                    <div className='flex-1 flex items-center flex-col justify-center px-4 lg:px-8'>
                        <p className='font-bold px-4 lg:px-10 text-white mb-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquid at earum sed dignissimos veniam natus officiis quam fugit</p>
                        <h1 className='text-4xl lg:text-6xl font-bold text-white text-center'>Modern Epoxy Flooring</h1>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[55%] relative'>
                <img className='w-full h-screen object-cover' src={hero.src} alt="" />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent'></div>
                <div className='absolute bottom-8 right-8'>
                    <button className='text-white px-6 py-3 font-semibold hover:underline hover:duration-300'>
                        View Collections
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
