import Feed from "@components/Feed";
import NoticePage from "@components/NoticeFeed/Body";

const Home = () => (
  <section className='flex-col w-full flex-center'>
    <h1 className='text-center head_text'>
      Online Notice Board
      <br className='max-md:hidden' />
      <span className='text-center orange_gradient'> AI-Powered Notice Board</span>
    </h1>
    <p className='text-center desc'>
      This is an Online Notice Board System designed to improve on the communication
      in our Community
    </p>
    <NoticePage />
    
    {/* <Feed /> */}
    {/* <NewsLetter /> */}
  </section>
);

export default Home;
