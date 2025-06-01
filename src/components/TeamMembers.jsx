import React from 'react';
import { Element } from 'react-scroll';
import web_gradient from "../assets/web_gradient.png";

function TeamMembers() {
  return (
    <Element name="team-section">
      <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center"
      style={{ backgroundImage: `url(${web_gradient})` }}
      >
        <h1 className='text-black text-xl'>Team member</h1>
      </div>
    </Element>
  );
}

export default TeamMembers;
