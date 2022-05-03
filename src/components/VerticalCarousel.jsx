import React from 'react'
import info1 from '../assets/infographics/vox 2011.jpg'
import info2 from '../assets/infographics/vox 2015.jpg'
import info3 from '../assets/infographics/vox 2019.jpg'
const info = [info1, info2, info3]

const VerticalCarousel = () => {
  return (
    <div className='flex flex-col md:flex-row indicator'>
      <span className='py-3 text-white -translate-x-5 border-none indicator-item badge bg-muted'>
        scroll
      </span>
      <div className='md:h-[430px]   md:w-[500px] w-[330px] h-[330px]  carousel carousel-vertical rounded-box'>
        {info.map(i => (
          <div key={i} id='item1' className='w-full h-full carousel-item'>
            <img alt='img' src={i} width='150%' />
          </div>
        ))}
      </div>

      {/* <div className='flex flex-row justify-center gap-2 py-2 mx-2 md:flex-col'>
        <a href='#item1' className='border-none btn bg-primary btn-xs'>
          1
        </a>
        <a href='#item2' className='border-none btn bg-primary btn-xs'>
          2
        </a>
        <a href='#item3' className='border-none btn bg-primary btn-xs'>
          3
        </a>
        <a href='#item4' className='border-none btn bg-primary btn-xs'>
          4
        </a>
      </div> */}
    </div>
  )
}

export default VerticalCarousel
