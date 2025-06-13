import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import web_gradient from "../assets/web_gradient_rev.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const eventsData = [
  {
    title: "Event1",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-purple-500/50 to-green-300",
  },
  {
    title: "Event2",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-red-600/50 to-yellow-300",
  },
  {
    title: "Event3",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-indigo-500/50 to-pink-300",
  },
  {
    title: "Event4",
    image: "https://dummyimage.com/1080x1080/392359/ffffff&text=350x350",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam voluptatum tempora molestiae quod ducimus dolorum eligendi mollitia totam ipsa?",
    registerLink: "https://www.google.co.in/",
    gradient: "from-purple-500/50 to-yellow-200",
  },
];



// three cards at large screen, two cards at medium screen, one card at small screen

const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      id="event-section"
      className="w-full mx-auto bg-cover bg-center relative flex flex-col items-center justify-center select-none"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="text-center m-20 z-10">
        <h1 className="text-6xl font-bold text-white mb-4">Our Events</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <span className="text-white/90 text-lg font-light">From Ideas to Impact</span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      <div className="w-[90%] max-w-6xl z-20 relative py-10">
        <Slider {...settings}>
          {eventsData.map((event, idx) => (
            <div key={idx} className="px-3">
              {/* Use your exact card structure here */}
              <div className="poppins-bold flex justify-center">
                <div
                  className="flex flex-col items-start p-8 gap-2 w-[90vw] md:w-[40vw] xl:w-[28vw] bg-white/10 "
                  style={{ borderRadius: 10 }}
                >
                  <div className="flex justify-center w-full rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="aspect-square rounded-xl"
                    />
                  </div>
                  <h4 className="sm:text-xl uppercase w-full text-white">{event.title}</h4>
                  <p className="w-full sm:text-base text-sm continue-text text-white">
                    {event.description}e
                  </p>
                  
                      <button 
                    className="transition-all text-white hover:text-[black] p-2 rounded bg-[#CF9FFF] sm:text-lg text-sm"
                    type="button"
                      >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default Events;