import {Header, Nav, VerticalCarousel, Card} from '../components'
import {Benefits, RecentPosts} from '../utils/AllData'
import useBlogPosts from './../hooks/useBlogPosts'
import FeatureCard from './../components/FeatureCard'

function Home() {
  const blogs = useBlogPosts(0, 6)
  return (
    <>
      {blogs.data && console.log(blogs.data)}
      <section className='relative overflow-hidden lg:h-double-screen background '>
        <div className='px-5 bg-right bg-no-repeat bg-contain lg:h-large-screen lg:bg-rectangle lg:px-32 '>
          <Nav />
          <Header />
        </div>

        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          What We Do
        </h3>
        <div className='flex flex-col items-center justify-around mb-5 lg:flex-row '>
          {Benefits.map((benefit, index) => (
            <FeatureCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      <section className='flex flex-col items-center my-10 lg:p-10 lg:my-10 lg:flex-row lg:justify-between'>
        <h3 className='my-10 text-6xl font-extrabold text-center lg:hidden lg:text-left text-dark'>
          Why?
        </h3>
        <VerticalCarousel />

        <div className='lg:w-1/2 '>
          <h3 className='hidden my-12 text-5xl font-extrabold text-center lg:flex lg:text-left text-dark'>
            Why?
          </h3>
          <p className='px-3 mt-6 mb-5 text-center lg:text-xl lg:text-left'>
            Information is power. With every election cycle, politicians unleash
            their different plots on the electorate in order to woo voters and
            win support, casting themselves as the best products and their
            opponents as the worst. But voting choices should be based on
            capacity and antecedents. In purchasing a product, the consumer that
            does his/her due diligence usually makes the best choices. Elections
            are no different.
          </p>
        </div>
      </section>

      <section className='my-8 lg:p-10 lg:my-10'>
        <h3 className='my-12 text-5xl font-extrabold text-center text-dark'>
          Recent Posts
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

export default Home
