import React from 'react'

const FeatureCard = props => {
  const {title, description, category, imageUrl} = props
  return (
    <div className='card mb-4 card-compact w-[350px] bg-primary-light/20 shadow-lg hover:shadow-2xl transitioning'>
      <figure>
        <img
          src={
            imageUrl
              ? imageUrl
              : 'https://api.lorem.space/image/shoes?w=400&h=225'
          }
          alt='Shoes'
          className={`${imageUrl && 'w-48 h-56'}`}
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
          <div className='justify-end card-actions '>
            <div className='badge badge-outline'>{category} </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureCard
