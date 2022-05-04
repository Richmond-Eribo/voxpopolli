import React from 'react'
import {Link} from 'react-router-dom'

const ProfileCard = props => {
  const {name, description, slug, picture} = props
  return (
    <div className='card card-compact transitioning bg-black shadow-2xl shadow-primary-light hover:scale-95 image-full'>
      {/* {console.log(picture?.fields.file.url)} */}
      <figure>
        <img src={`https:` + picture?.fields.file.url} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-xl '>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <Link to={`/Candidates/${slug}`}>
            <button className='btn btn-sm btn-outline text-muted  '>
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
