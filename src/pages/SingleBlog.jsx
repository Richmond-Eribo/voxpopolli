import React from 'react'
import {useParams} from 'react-router-dom'
import {Card, Nav} from '../components'
import useSingleBlogPost from './../hooks/useSingleBlogPost'
import useBlogPosts from './../hooks/useBlogPosts'

import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, MARKS} from '@contentful/rich-text-types'
import {Link} from 'react-router-dom'

const SingleBlog = () => {
  const {id} = useParams()
  const {data} = useSingleBlogPost(id)
  const blogs = useBlogPosts(3, 3)

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='leading-6 mb-3  text-black'>{children}</p>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className='ml-4 list-decimal list-outside'>{children}</ol>
      ),
    },
    // renderMark: {
    //   [MARKS.BOLD]: text => span,
    // },
  }

  return (
    <>
      {data && console.log(data.fields)}
      <section className='relative min-h-screen   px-5 overflow-hidden bg-right bg-no-repeat background lg:px-32 '>
        <Nav />
        {data && (
          <article>
            <h1 className='mt-10 mb-2 text-3xl font-black text-center md:text-8xl text-dark '>
              {data.fields.title}
            </h1>
            {documentToReactComponents(data.fields.blogContent, options)}
          </article>
        )}
      </section>

      <section className='my-8 lg:p-10 lg:my-10'>
        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          Read More
        </h3>

        <div className='grid grid-cols-1 gap-3 mb-5 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
          {blogs.data &&
            blogs.data.map((blog, index) => (
              <Card key={index} {...blog.fields} />
            ))}
        </div>
      </section>
    </>
  )
}

export default SingleBlog
