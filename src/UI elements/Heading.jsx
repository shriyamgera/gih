import React from 'react'

const Heading = ({ index, title }) => {
  return (
    <div className='flex items-center text-off_white md:text-[32px] text-[20px] gap-4 glassmorphism whitespace-nowrap'>
      <div>
        {index && <span className=' font-mono text-primary'>{index}. </span>}<span className=' font-bold'>{title}</span>
      </div>
      <div className='h-[1px] w-full max-w-[300px] bg-lightest_navy'></div>
    </div>
  )
}

export default Heading