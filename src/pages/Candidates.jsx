import React from 'react'
import Downarrow from '../assets/downarrow.svg'
import {Card, Nav, ProfileCard} from '../components'
import {RecentPosts} from '../utils/AllData'
import usePresidentialCandidates from '../hooks/usePresidentialCandidates'

const Candidates = () => {
  const {data} = usePresidentialCandidates()

  // const filterTesting = data => {
  //   data.map(D => D.fields)
  // }

  return (
    <>
      {/* {data && data.map(N => console.log(N))} */}
      <section className='relative h-screen md:h-[70vh] lg:h-screen px-5 overflow-hidden bg-right bg-no-repeat background lg:px-32 '>
        <Nav />
        <p className='mt-16 text-6xl font-black text-center md:text-8xl text-dark '>
          2023 Presidential Candidates
        </p>

        <p className='my-10 text-lg text-center md:text-xl'>
          Voting choices should be based on capacity and antecedents. It is in
          pursuance of this cause that we have created this singular platform
        </p>
        <img
          src={Downarrow}
          height={40}
          width={40}
          alt='hi'
          className='flex justify-center m-20 mx-auto animate-bounce'
        />
      </section>

      <section className='grid grid-cols-1 gap-5 px-5 mb-10 md:gap-10 md:grid-cols-3 md:px-11'>
        {data?.map(aspirant => (
          <ProfileCard {...aspirant.fields} />
        ))}
      </section>

      <section className='my-10 md:p-10 md:my-16'>
        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          Recent Posts
        </h3>

        <div className='grid grid-cols-1 mb-5 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
          {RecentPosts.map((recentPost, index) => (
            <Card key={index} {...recentPost} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Candidates
