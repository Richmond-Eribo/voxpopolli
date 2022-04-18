// import voteImage from '../assets/vote.png'
import listRectImage from '../assets/ListRect.svg'
import LandingImage from '../assets/LandingImage.svg'
import {Link} from 'react-router-dom'
// import ViewIcon from '../assets/icons/View Icon.svg'
// import Woman from '../assets/Woman@10x.png'

function Header() {
  return (
    <div className='flex justify-between '>
      <section className='relative my-20'>
        <div className='mb-8  text-center lg:text-left lg:w-[537px]'>
          <p className='text-6xl font-black md:text-7xl lg:text-8xl text-dark'>
            Voice of the <span className=''>People</span>
          </p>
          <p className='my-5 mb-12 lg:text-lg'>
            Presenting the public with hard facts about presidential aspirants,
            trending information in the build up to the election, and analysis
            of each candidate based on their capacity to deliver as the number
            one citizen of the world’s biggest black nation,
          </p>
        </div>

        <img
          src={listRectImage}
          alt='vote'
          className='absolute rounded-lg animate-pulse bottom-12 right-8'
          height={150}
          width={150}
        />
        <img
          src={listRectImage}
          alt='vote'
          className='absolute rounded-lg animate-pulse top-12 -right-20'
          height={150}
          width={150}
        />
        <img
          src={listRectImage}
          alt='vote'
          className='absolute rounded-lg animate-pulse top-12 left-10'
          height={150}
          width={150}
        />

        <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-start '>
          <button className='mb-5 lg:mb-0 button button-blue lg:mr-5'>
            <Link to='/Candidates'>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                role='img'
                width='1em'
                height='1em'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z'
                />
                <path
                  fill='currentColor'
                  d='M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z'
                />
              </svg> */}
              <p className='ml-2'>Meet the Candidates</p>
            </Link>
          </button>

          <button className='button button-dark '>
            <Link to='/Elections'>
              <p className='ml-2'>Previous Elections</p>
            </Link>
          </button>
        </div>

        <div className='my-4 text-center md:text-left'></div>
      </section>
      <section className='Images lg:my-12 hidden lg:block relative   w-[682px] h-[482px]'>
        <img
          src={LandingImage}
          alt='vote'
          className='absolute top-3 -right-24'
          height={1080}
          width={1080}
        />
        <img
          src={listRectImage}
          alt='vote'
          className='absolute rounded-lg animate-pulse bottom-12 right-8'
          height={150}
          width={150}
        />
        <img
          src={listRectImage}
          alt='vote'
          className='absolute rounded-lg animate-pulse top-12 -right-20'
          height={150}
          width={150}
        />
        <img
          src={listRectImage}
          alt='vote'
          className='rounded-lg bg- animate-pulse'
          height={150}
          width={150}
        />
      </section>
    </div>
  )
}

export default Header
