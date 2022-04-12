import React from 'react'
import {useParams} from 'react-router-dom'
import Nav from './../components/Nav'
import useSinglePresidentialCandidates from './../hooks/useSinglePresidentialCandidates'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'

const Aspirant = () => {
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
      <section className='relative px-5 pt-8 overflow-hidden bg-right bg-no-repeat background md:px-32 md:pt-12'>
        <Nav />
        {data && (
          <div className='flex flex-col justify-around mt-10 lg:flex-row'>
            <img
              src='https://api.lorem.space/image/face?w=300&h=200'
              alt='na wah'
              className='w-48 mx-auto rounded-md lg:mx-4 h-44 md:w-96 md:h-96'
            />
            <div>
              <p className='self-end pb-3 text-2xl font-black text-center capitalize lg:text-left md:text-3xl lg:text-4xl text-dark'>
                {data.fields.name}
              </p>
              {documentToReactComponents(data.fields.bio, options)}
              {documentToReactComponents(data.fields.mustKnow, options)}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Aspirant
