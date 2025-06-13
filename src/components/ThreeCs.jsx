import React, { useState } from 'react';
import { FaLink, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const ThreeCs = () => {
  const [active, setActive] = useState(null);

  const cards = [
    {
      key: 'connect',
      title: 'Connect',
      icon: <FaLink size={28} />,
      text: `We cultivate a thriving network by connecting students with industry experts, alumni, and like-minded peers. These connections foster mentorship, insight, and real-world exposure.`,
      bg: 'bg-blue-800',
      border: 'border-blue-600',
    },
    {
      key: 'collaborate',
      title: 'Collaborate',
      icon: <FaHandsHelping size={28} />,
      text: `Through workshops, case studies, and projects, members share knowledge, grow together, and develop essential leadership skills.`,
      bg: 'bg-blue-700',
      border: 'border-blue-500',
    },
    {
      key: 'create',
      title: 'Create',
      icon: <FaLightbulb size={28} />,
      text: `Innovation drives us. We ideate, strategize, and build real solutions, empowering future leaders in consulting and product design.`,
      bg: 'bg-blue-600',
      border: 'border-blue-400',
    },
  ];

  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-100">Our Principle: The 3 Cs</h2>

      {cards.map((c, i) => {
        const isActive = active === i;

        return (
          <div
            key={c.key}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => toggle(i)}
            className={
              `${c.bg} ${c.border} border rounded-lg w-full max-w-md p-4 cursor-pointer transform transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`
            }
          >
            <div className="flex flex-col items-center">
              <div className="text-blue-200 mb-2">{c.icon}</div>
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>

              <div
                className={
                  `mt-2 text-center text-gray-200 text-sm leading-relaxed overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`
                }
              >
                {c.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThreeCs;
