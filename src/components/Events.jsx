
import React, { useState } from "react";
import web_gradient from "../assets/web_gradient_rev.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
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
      <div className="absolute inset-0 bg-black/20" />
      <div className="text-center m-20 z-10">
        <h1 className="text-6xl font-bold text-white mb-4">Our Events</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <span className="text-white/90 text-lg font-light">From Ideas to Impact</span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      <div className="w-[85%] max-w-6xl z-20 relative py-10">
        <Slider {...settings}>
          {eventsData.map((event, idx) => (
            <div key={idx} className="px-3">
              <div className="group relative flex justify-center items-center">
                <div
                  className={`group w-[240px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-[400px] relative rounded-2xl 
                  shadow-[1px_7px_28px_-12px_rgba(0,0,0,0.75)] overflow-hidden 
                  bg-purple-900/30 cursor-pointer transition-transform duration-400 ease-in-out`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 z-10 bg-gradient-to-t ${event.gradient} 
                    opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none`}
                  ></div>

                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-0"
                    onError={(e) =>
                      (e.target.src =
                        "https://dummyimage.com/350x350/000000/392359&text=350x350")
                    }
                  />

                  {/* Text content - hidden until hover */}
                  <div
                    className="z-20 px-6 text-white font-bold text-center transition-all duration-500 translate-y-0
                    opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h3 className="text-2xl font-semibold mb-2 sm:mt-10 md:mt-20">
                      {event.title}
                    </h3>
                    <p className="text-sm mb-5">{event.description}</p>
                    {event.registerLink && (
                      <a
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 rounded-full font-bold text-sm text-[#eee] bg-[#2A2772f3]
                          border border-white/30 shadow-[0px_10px_20px_rgba(0,0,0,0.2)] 
                          transition-all duration-300 ease-in-out
                          hover:animate-pulse hover:bg-[#1c1a4d]"
                      >
                        Register
                      </a>

                    )}
                  </div>
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


// three cards at large screen, two cards at medium screen, one card at small screen

// const Events = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     centerMode: true,
//     centerPadding: "0px",
//     responsive: [
//       {
//         breakpoint: 768, // mobile
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024, // tablets
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       id="event-section"
//       className="w-full mx-auto bg-cover bg-center relative flex flex-col items-center justify-center select-none"
//       style={{ backgroundImage: `url(${web_gradient})` }}
//     >
//       <div className="absolute inset-0 bg-black/50" />
//       <div className="text-center m-20 z-10">
//         <h1 className="text-6xl font-bold text-white mb-4">Our Events</h1>
//         <div className="flex items-center justify-center gap-4">
//           <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
//           <span className="text-white/90 text-lg font-light">From Ideas to Impact</span>
//           <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
//         </div>
//       </div>

//       <div className="w-[90%] max-w-6xl z-20 relative py-10">
//         <Slider {...settings}>
//           {eventsData.map((event, idx) => (
//             <div key={idx} className="px-3">
//               {/* Use your exact card structure here */}
//               <div className="poppins-bold flex justify-center">
//                 <div
//                   className="flex flex-col items-start p-8 gap-2 w-[90vw] md:w-[40vw] xl:w-[28vw] bg-white"
//                   style={{ borderRadius: 10 }}
//                 >
//                   <div className="flex justify-center w-full">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="aspect-square"
//                     />
//                   </div>
//                   <h4 className="sm:text-xl uppercase w-full">{event.title}</h4>
//                   <p className="w-full sm:text-base text-sm continue-text">
//                     {event.description}
//                   </p>
//                   <button
//                     className="transition-all text-yellow-400 hover:text-[#FCA311] p-2 rounded bg-[#14213D] sm:text-lg text-sm"
//                     type="button"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//       </div>
//     </section>
//   );
// };

// export default Events;