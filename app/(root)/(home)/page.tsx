import MeetinTypeList from '@/components/MeetinTypeList';

const Home = () => {
  const now = new Date();
  const time1 = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className='flex flex-col size-full gap-5 text-white'>
      <div className="w-full h-[300px] rounded-[20px] bg-hero  ">
        <div className="flex justify-between flex-col w-full lg:p-11 max-md:px-5 max-md:py-8 p-6 h-full ">
          <h2 className='glassmorphism max-w-[270px] rounded text-base text-center font-normal' >
            Upcoming Meeting at:{time1}
          </h2>

          <div className=" flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
             <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
          
        </div>
      </div>

      <MeetinTypeList/>
    </section>
  )
}

export default Home
