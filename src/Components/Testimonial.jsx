import React from 'react'
import { testimonials } from '../Constant/index.jsx'

function Testimonial() {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
        What people are saying
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
            <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
              <p>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 rounded-full" />
                <div className='ml-4'>
                  <p className='font-semibold'>{testimonial.user}</p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
