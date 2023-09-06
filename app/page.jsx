import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Online Notice Board
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Notice Board</span>
    </h1>
    <p className='desc text-center'>
      This is an Online Notice Board System designed to improve on the communication
      in our Community
    </p>

    <Feed />
  </section>
);

export default Home;
