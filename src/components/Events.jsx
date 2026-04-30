import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import event1 from '../assets/event1.jpg';

const eventsData = [
  {
    title: "Product Management Bootcamp",
    image: event1,
    description: "Hands-on Summer of Product workshop with HelloPM, led by Ankit Shukla.",
    tag: "Workshop",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "CaseCraft Competition",
    image: "/casecraft.jpeg",
    description: "Real-world consulting cases to test strategy, analytics, and problem-solving.",
    tag: "Competition",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const Events = () => {
  return (
    <section id="event-section" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our <span className="text-purple-600">Events</span></h2>
          <p className="text-gray-400 text-xl max-w-md">From raw ideas to measurable impact. Join our flagship sessions.</p>
        </div>
        <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block mb-4" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {eventsData.map((event, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="glass-card group flex h-full flex-col overflow-hidden rounded-[2.5rem]"
          >
            <div className={`relative bg-gradient-to-br p-5 sm:p-6 ${event.gradient}`}>
              <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                {event.tag}
              </div>

              <div className="relative mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/20 bg-black/20 p-2">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black/30">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <Calendar className="w-10 h-10 text-white/20 absolute bottom-4 right-4" />
            </div>
            
            <div className="flex flex-grow flex-col p-8">
              <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-purple-400">{event.title}</h3>
              <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-400">{event.description}</p>
              
              {event.registerLink && (
                <a 
                  href={event.registerLink}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 text-center text-sm font-bold transition-all hover:bg-white hover:text-black"
                >
                  Register Now <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;