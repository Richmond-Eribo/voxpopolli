import React from 'react'

const VerticalCarousel = () => {
  return (
    <div className='flex flex-col md:flex-row indicator'>
      <span className='indicator-item border-none  badge bg-muted py-3  text-white  -translate-x-5'>
        scroll
      </span>
      <div className='md:h-[400px]   md:w-[500px] w-[330px] h-[330px]  carousel carousel-vertical rounded-box'>
        <div id='item1' className='carousel-item h-full w-full'>
          <img
            alt='img'
            src='https://api.lorem.space/image/game?w=600&h=400&hash=8B7BCDC2'
          />
        </div>
        <div id='item2' className='carousel-item h-full'>
          <img
            alt='img'
            src='https://api.lorem.space/image/game?w=600&h=400&hash=500B67FB'
          />
        </div>
        <div id='item3' className='carousel-item h-full'>
          <img
            alt='img'
            src='https://api.lorem.space/image/game?w=600&h=400&hash=A89D0DE6'
          />
        </div>
        <div id='item4' className='carousel-item h-full'>
          <img
            alt='img'
            src='https://api.lorem.space/image/game?w=600&h=400&hash=225E6693'
          />
        </div>
        <div id='item5' className='carousel-item h-full'>
          <img
            alt='img'
            src='https://api.lorem.space/image/game?w=500&h=400&hash=9D9539E7'
          />
        </div>
      </div>

      <div className='flex flex-row md:flex-col mx-2 justify-center  py-2 gap-2'>
        <a href='#item1' className='btn bg-primary border-none btn-xs'>
          1
        </a>
        <a href='#item2' className='btn bg-primary border-none  btn-xs'>
          2
        </a>
        <a href='#item3' className='btn bg-primary border-none btn-xs'>
          3
        </a>
        <a href='#item4' className='btn bg-primary border-none btn-xs'>
          4
        </a>
      </div>
    </div>
  )
}

export default VerticalCarousel
