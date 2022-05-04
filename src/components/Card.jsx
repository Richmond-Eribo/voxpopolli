import React from 'react'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import {Link} from 'react-router-dom'

const Card = props => {
  const {title, blogContent, slug} = props
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=' font-light  text-base text-black'>{children}</p>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className='ml-4 list-decimal list-outside'>{children}</ol>
      ),
    },
  }
  return (
    <div className='card transitioning cursor-pointer mb-4 card-compact  w-[350px] bg-primary-light/20 shadow-lg hover:shadow-2xl'>
      <div className='card-body'>
        <h2 className={` text-dark card-title `}>{title}</h2>
        <article className=' h-24 overflow-hidden'>
          {documentToReactComponents(blogContent, options)}
        </article>
        <button>
          <Link
            to={`/Blog/${slug}`}
            className=' button button-blue flex justify-center mb-2'
          >
            View
          </Link>
        </button>
      </div>
    </div>
  )
}
// ${
//   category &&
//   'cursor-pointer transition-all duration-300 ease-in-out hover:text-primary'
// }

export default Card
