import {Header, Nav, VerticalCarousel, Card} from '../components'
import {Benefits, RecentPosts} from '../utils/AllData'

function Home() {
  return (
    <>
      <section className='relative overflow-hidden md:h-double-screen background '>
        <div className='px-5 pt-8 bg-right bg-no-repeat bg-contain md:h-large-screen md:bg-rectangle md:px-32 md:pt-12 '>
          <Nav />
          <Header />
        </div>

        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          Benefits
        </h3>
        <div className='flex flex-col items-center justify-around mb-5 md:flex-row '>
          {Benefits.map(benefit => (
            <Card key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className='flex flex-col items-center my-10 md:p-10 md:my-16 md:flex-row md:justify-between'>
        <h3 className='my-10 text-6xl font-extrabold text-center md:hidden md:text-left text-dark'>
          Why?
        </h3>
        <VerticalCarousel />

        <div className='md:w-1/2 '>
          <h3 className='hidden my-12 text-5xl font-extrabold text-center md:flex md:text-left text-dark'>
            Why?
          </h3>
          <p className='px-3 mb-5 text-xl text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            quasi quibusdam commodi. Explicabo, laborum fugiat rerum in facilis
            ea similique tempora ut? Temporibus eligendi porro magni reiciendis
            quasi perferendis consequuntur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus maxime ex impedit quibusdam
            laboriosam reiciendis quod, omnis obcaecati quas est aspernatur
            corporis nostrum eius voluptatem in dolorem assumenda nihil laborum.
          </p>
        </div>
      </section>

      <section className='my-10 md:p-10 md:my-16'>
        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          Recent Posts
        </h3>

        <div className='flex flex-col items-center justify-around mb-5 md:flex-row '>
          {RecentPosts.map(recentPost => (
            <Card key={recentPost.title} {...recentPost} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
