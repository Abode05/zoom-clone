import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <section className='flex flex-col size-full gap-10 text-white'>
      <h1 className='font-bold text-3xl'>pe\revios</h1>

      <CallList
      type='ended'
      />
    </section>
  )
}

export default Previous
