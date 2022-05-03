import React from 'react'
import {useParams} from 'react-router-dom'
import Nav from '../components/Nav'
import useSinglePresidentialCandidates from '../hooks/useSinglePresidentialCandidates'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'

const Candidate = () => {
  const params = useParams()
  const id = params.id
  const {data} = useSinglePresidentialCandidates(id)

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='py-2 font-light leading-6 text-black'>{children}</p>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className='ml-4 list-decimal list-outside'>{children}</ol>
      ),
    },
  }
  return (
    <>
      {/* {data && console.log(data)} */}
      {/* {console.log(id)} */}
      <section className='relative px-5 overflow-hidden bg-right bg-no-repeat background lg:px-32 2'>
        <Nav />
        {data ? (
          <div className='flex flex-col justify-around mt-10 lg:flex-row'>
            <img
              src={'https:' + data.fields.picture.fields.file.url}
              alt='na wah'
              className='w-56 mx-auto rounded-md lg:mx-4 h-44 md:w-96 md:h-64'
            />
            <div>
              <p className='self-end pb-3 text-2xl font-black text-center capitalize lg:text-left md:text-3xl lg:text-4xl text-dark'>
                {data.fields.name}
              </p>
              {documentToReactComponents(data.fields.bio, options)}
              {documentToReactComponents(data.fields.mustKnow, options)}
            </div>
          </div>
        ) : (
          <div className='h-[60vh]'>
            {' '}
            <p className='mt-16 text-3xl font-black text-center md:text-8xl text-dark '>
              Hey,
              <br /> getting your data
            </p>
          </div>
        )}
      </section>
    </>
  )
}

export default Candidate
