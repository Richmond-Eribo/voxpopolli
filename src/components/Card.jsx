import React from 'react'

const Card = props => {
  const {title, description, category} = props
  return (
    <div className='card mb-4 card-compact w-96 bg-primary-light/20 shadow-xl'>
      <figure>
        <img
          src='https://api.lorem.space/image/shoes?w=400&h=225'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2
          className={`${
            category &&
            'cursor-pointer transition-all duration-300 ease-in-out hover:text-primary'
          } text-dark card-title `}
        >
          {title}
        </h2>
        <p className='text-base'>{description}</p>
        {props.category && (
          <div className='card-actions justify-end '>
            <div className='badge badge-outline'>{category} </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
