import React from 'react'
import {Link} from 'react-router-dom'

const ProfileCard = props => {
  const {name, description, slug} = props
  return (
    <div class='card card-compact transitioning bg-black shadow-2xl shadow-primary-light hover:scale-95 image-full'>
      <figure>
        <img src='https://api.lorem.space/image/face?w=300&h=200' alt='Shoes' />
      </figure>
      <div class='card-body'>
        <h2 class='card-title text-xl uppercase'>{name}</h2>
        <p>{description}</p>
        <div class='card-actions justify-end'>
          <Link to={`/Aspirants/${slug}`}>
            <button class='btn btn-sm btn-outline text-muted  '>
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
