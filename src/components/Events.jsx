
import React, { useState } from "react";
import web_gradient from "../assets/web_gradient_rev.png";
const eventsData = [
  {
    title: "Event",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-purple-500/50 to-green-300",
  },
  {
    title: "Event",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-red-600/50 to-yellow-300",
  },
  {
    title: "Event",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-indigo-500/50 to-pink-300",
  },
  {
    title: "Event",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-purple-500/50 to-yellow-200",
  },
];

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipDirection, setFlipDirection] = useState(null); // "left" or "right"

  // Navigate prev with flip left animation
  const prevCard = () => {
    setFlipDirection("left");
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length);
      setFlipDirection(null);
    }, 400); // match animation duration
  };

  // Navigate next with flip right animation
  const nextCard = () => {
    setFlipDirection("right");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % eventsData.length);
      setFlipDirection(null);
    }, 400);
  };

  const event = eventsData[activeIndex];

  return (
    <section
      id="event-section"
      className="w-[100%] mx-auto bg-cover bg-center relative 
       flex flex-col items-center justify-center select-none "
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      {/* Enhanced Heading Section */}
          <div className="text-center m-20 z-5">
            <h1 className="text-6xl font-bold text-white mb-4">
              Our Events
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="text-white/90 text-lg font-light">From Ideas to Impact</span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

      <div className="text-centre mb-20 flex flex-col items-center justify-center select-none ">
        {/* Left Arrow */}
        <button
          onClick={prevCard}
          aria-label="Previous Event"
          className="absolute left-2 sm:left-4  sm:top-1/2  text-white text-4xl cursor-pointer select-none
            hover:text-blue-400 transition-colors z-50 pl-10"
          type="button"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextCard}
          aria-label="Next Event"
          className="absolute right-2 sm:right-4 sm:top-1/2 text-white text-4xl cursor-pointer select-none
            hover:text-blue-400 transition-colors z-50 pr-10"
          type="button"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Card */}
        <div
          key={activeIndex}
          className={`group w-[40%] sm:w-[180px] md:w-[240px] lg:w-[280px] h-auto sm:h-[340px] md:h-[380px] lg:min-h-[380px] relative rounded-2xl shadow-[1px_7px_28px_-12px_rgba(0,0,0,0.75)]
            flex flex-col items-center  overflow-hidden
            bg-purple-900/30 cursor-pointer transition-transform duration-400 ease-in-out 
            ${flipDirection === "right" ? "animate-flipRight" : flipDirection === "left" ? "animate-flipLeft" : ""}
          `}
          tabIndex={0}
        >
          {/* Gradient overlay - appears on hover */}
          <div
            className={`absolute inset-0 z-10 bg-gradient-to-t ${event.gradient}
              opacity-0 group-hover:opacity-90 transition-all duration-500`}
          ></div>

          {/* Image */}
          <img
            src={event.image}
            alt={event.title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-0"
            onError={(e) =>
              (e.target.src = "https://dummyimage.com/350x350/000000/392359&text=350x350")
            }
          />

          {/* Info Box - hidden initially, shown on hover */}
          <div
            className=" z-20 px-6 text-white text-center transition-all duration-500 translate-y-0
               opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <h3 className="text-2xl font-semibold mb-2 sm:mt-10 md:mt-20">{event.title}</h3>
            <p className="text-sm mb-5">{event.description}</p>
            {event.registerLink && (
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full font-bold text-sm text-[#eee] bg-[#2A2772f3]
                  border border-white/30 shadow-[0px_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform"
              >
                Register
              </a>
            )}
          </div>
        </div>
      </div>


      {/* Custom animations */}
      <style>
        {`
          @keyframes flipRight {
            0% {
              transform: rotateY(0deg);
              opacity: 1;
            }
            50% {
              transform: rotateY(90deg);
              opacity: 0;
            }
            51% {
              transform: rotateY(-90deg);
              opacity: 0;
            }
            100% {
              transform: rotateY(0deg);
              opacity: 1;
            }
          }
          @keyframes flipLeft {
            0% {
              transform: rotateY(0deg);
              opacity: 1;
            }
            50% {
              transform: rotateY(-90deg);
              opacity: 0;
            }
            51% {
              transform: rotateY(90deg);
              opacity: 0;
            }
            100% {
              transform: rotateY(0deg);
              opacity: 1;
            }
          }

          .animate-flipRight {
            animation: flipRight 0.4s forwards;
          }
          .animate-flipLeft {
            animation: flipLeft 0.4s forwards;
          }

          /* Gradient overlay transition on hover */
          div.relative:hover > div.absolute {
            opacity: 0.8 !important;
            background-position: bottom;
            transition: opacity 0.5s ease, background-position 0.5s ease;
          }
        `}
      </style>
    </section>
  );
};

export default Events;
