import React from 'react';
import { Element } from 'react-scroll';
import web_gradient_rev from '../assets/web_gradient_rev.png'

function Events() {
  return (
    <Element name="event-section">
      <div className="w-full h-[100vh] flex justify-center items-center bg-gray-300"
      style={{ backgroundImage: `url(${web_gradient_rev})` }}
      >
        <h1 className='text-black text-xl'>Events</h1>
      </div>
    </Element>
  );
}

export default Events;
