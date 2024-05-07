import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex flex-col size-full gap-10 text-white'>
      <h1 className='font-bold text-3xl'>Upcoming</h1>

      <CallList
      type='upcoming'
      />
    </section>
  )
}

export default Upcoming
