import voteImage from '../assets/vote.png'
import listRectImage from '../assets/ListRect.svg'
// import Woman from '../assets/Woman@10x.png'

function Header() {
  return (
    <div className='flex justify-between '>
      <section className='md:my-24 '>
        <div className='mb-8 text-center md:text-left'>
          <p className='mt-10 font-black text-7xl md:text-8xl text-dark '>
            Voice of the <span className=''>People</span>
          </p>
          <p className='my-4 text-lg font-normal mb-14'>
            Get infomation about the people and about your presidential
            candidates.
          </p>
        </div>

        <div className='flex justify-center md:my-6 md:justify-start '>
          <button className='button button-light flex-jus'> check</button>
        </div>

        <div className='my-4 text-center md:text-left'>
          <p className='link link-primary'>
            this is an headline that talks about the something
          </p>
          <p className='link link-primary'>
            this is an headline that talks about the something
          </p>
          {/* <p className='blog-link'>
            this is an headline that talks about the something
          </p> */}
        </div>
      </section>
      <section className='Images md:my-12 hidden md:block relative   w-[682px] h-[482px]'>
        {/* <img
          src={Woman}
          alt='vote'
          className='absolute lg:-bottom-11 right-4'
          height={1800}
          width={1800}
        /> */}
        <img
          src={voteImage}
          alt='vote'
          className='absolute top-24 -right-6'
          height={300}
          width={300}
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
