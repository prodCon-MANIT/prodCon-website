import React from 'react';
import { Element } from 'react-scroll';
import web_gradient_rev from '../assets/web_gradient_rev.png'

const eventsData = [
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-orange-700/50 to-yellow-400',
  },
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-green-500/50 to-green-300',
  },
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-sky-500/50 to-blue-300',
  },
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-red-600/50 to-yellow-300',
  },
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-indigo-500/50 to-pink-300',
  },
  {
    title: 'Event',
    image: 'https://dummyimage.com/1080x1080/2563eb/ffffff&text=350x350',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink:
      'https://www.google.co.in/',
    gradient: 'from-purple-500/50 to-yellow-200',
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="w-[90%] min-h-[70vh] mt-[60px] mb-[60px] mx-auto p-12 rounded-[10px] text-left bg-purple-100 backdrop-blur-3xl relative overflow-hidden transform-gpu"
    >
      <h3 className="text-center text-3xl font-bold text-[#eee] text-blue-900 mb-10">
        Our Events
      </h3>

      <div className="flex gap-5 w-[150%] animate-[moveSlideshow_10s_linear_infinite] sm:animate-[moveSlideshow_20s_linear_infinite] md:animate-[moveSlideshow_30s_linear_infinite] lg:animate-[moveSlideshow_40s_linear_infinite] hover:[animation-play-state:paused]">
        {eventsData.map((event, idx) => (
          <div
            key={idx}
            className={`min-w-[250px] relative h-[350px] rounded-2xl shadow-[1px_7px_28px_-12px_rgba(0,0,0,0.75)] flex items-end transition-transform duration-500 hover:translate-y-2 overflow-hidden group`}
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b ${event.gradient}`}
            ></div>

            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="absolute top-0 left-0 w-full h-full object-fill rounded-xl z-0"
              onError={(e) =>
                (e.target.src = 'https://dummyimage.com/350x350/000000/800080&text=350x350')
              }
            />

            {/* Info Box */}
            <div className="relative z-20 p-4 text-white translate-y-[30px] opacity-0 group-hover:translate-y-[-50px] group-hover:opacity-100 transition-all duration-500 text-sm">
              <h3 className="text-[2vw] font-semibold">{event.title}</h3>
              <p className="text-[13px] mt-2 mb-10">{event.description}</p>

              {event.registerLink && (
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center w-[230px] h-[45px] rounded-full font-bold text-sm text-[#eee] bg-[#2A2772f3] border border-white/30 shadow-[0px_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform mx-auto"
                >
                  Register
                  <svg
                    fill="#eee"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes for sliding animation */}
      <style>
        {`
          @keyframes moveSlideshow {
            0% { transform: translateX(80%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default Events;
