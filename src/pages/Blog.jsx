import React, {useState} from 'react'
import {Card, Nav} from '../components'
import useBlogPosts from './../hooks/useBlogPosts'

const Blog = () => {
  const [skipQuery, setSkipQuery] = useState(0)
  const {data} = useBlogPosts(skipQuery, 8)

  const SkipQueryFunc = arg => {
    arg === 'add' && setSkipQuery(current => current + 8)

    if ((arg === 'sub') & (skipQuery !== 0)) {
      setSkipQuery(current => current - 8)
    }
  }
  return (
    <>
      {/* {data && console.log(data)} */}
      <section className='relative   px-5 overflow-hidden bg-right bg-no-repeat background lg:px-32 '>
        <Nav />
        <p className='mt-16 text-6xl font-black text-center md:text-8xl text-dark '>
          Blog
        </p>

        <p className='my-10 text-lg text-center md:text-xl'>
          News without prejudice blah blah blah blah blah blah
        </p>

        <section className='my-8 lg:p-10 '>
          <div className='grid grid-cols-1 gap-3 mb-5 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
            {data &&
              data.map((blog, index) => <Card key={index} {...blog.fields} />)}
          </div>
        </section>
        <section className='flex justify-between px-9 w-[330px] mx-auto mb-5'>
          <button
            disabled={skipQuery === 0 ? true : false}
            onClick={() => SkipQueryFunc('sub')}
            className='button button-blue'
          >
            Previous
          </button>
          <button
            disabled={data.length < 8 ? true : false}
            onClick={() => SkipQueryFunc('add')}
            className='button button-blue'
          >
            Next
          </button>
        </section>
      </section>
    </>
  )
}

export default Blog
