import './style.scss'
import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/icons/1.svg'
import user from '../../assets/icons/people2.svg'
import Date from '@/components/UI/DatePicerMobile'

const index = () => {
  return (
    <section id='src'>
      <div className='container mx-auto'>
        <h1 className=' h3 text-white font-[Helvetica] text-[72px] font-bold mt-32'>
          The whole world <br /> awaits.
        </h1>
        <div className=' srb'>
          <div>
            <div className='m-4' />
            <input
              className='input h-[44px] w-full rounded-full focus:outline-none '
              type='text'
              placeholder='Search destinations, hotels'
            />
          </div>
          <div className=' check mt-[16px] flex justify-center'>
            <Date />
          </div>
          <div className=' check mt-[16px] flex justify-center'>
            <Image src={user} alt='user img' />
            <p className=''>1 room, 2 adults</p>
          </div>
          <div className=' sr check mt-[16px] cursor-pointer'>
            <p>Search</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
