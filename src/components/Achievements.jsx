import React from 'react';
import web_gradient from '../assets/web_gradient_rev.png';
import iitBombayImg from '../assets/iit_bombay.png';
import iimCalcuttaImg from '../assets/iim_calcutta.png';
import mastersUnionImg from '../assets/masters_union.png';

const cardBase = `relative flex flex-col lg:flex-row items-center bg-white/70 backdrop-blur-md border rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 group`;
const cardBorder = `border-2 border-transparent bg-clip-padding bg-gradient-to-br from-purple-200/60 via-blue-200/40 to-pink-200/60`;
const cardOverlay = `before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:pointer-events-none before:rounded-2xl`;
const cardAnim = `animate-fadein`;
const imgClass = `w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 m-4 rounded-full object-cover bg-white/80 flex-shrink-0`;

export default function Achievements() {
  return (
    <section
      id="achievements-section"
      className="w-full mx-auto bg-cover bg-center relative flex flex-col items-center justify-center min-h-screen select-none"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center">
        
        <h1 className="text-5xl text-center font-bold text-white mb-4">Our Achievements</h1>
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 px-4">
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <span className="text-white/90 text-lg sm:text-base lg:text-lg font-light">Highlights</span>
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="space-y-8 sm:space-y-10 lg:space-y-14 w-full">
          {/* Card 1: Top National & International Recognition */}
          <div className={`${cardBase} ${cardBorder} ${cardOverlay} ${cardAnim}`} style={{animationDelay: '0.1s', animationFillMode: 'backwards'}}>
            <img src={iitBombayImg} alt="IIT Bombay" className={imgClass} />
            <div className="p-4 sm:p-6 lg:p-8 flex-1 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-2 font-sans tracking-tight drop-shadow-sm">Top National & International Recognition</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                <li>Winner – International Cenex Award, IIT Bombay</li>
                <li>Top 3 Teams – The Boardroom Marketing Competition, IIM Calcutta</li>
                <li>Finalist – Techniche, IIT Guwahati (Northeast India’s largest tech fest)</li>
              </ul>
            </div>
          </div>
          {/* Card 2: Case & B-Plan Competitions (zigzag) */}
          <div className={`${cardBase} ${cardBorder} ${cardOverlay} ${cardAnim} lg:flex-row-reverse`} style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
            <img src={iimCalcuttaImg} alt="IIM Calcutta" className={imgClass} />
            <div className="p-4 sm:p-6 lg:p-8 flex-1 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-2 font-sans tracking-tight drop-shadow-sm">Case & B-Plan Competitions</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                <li>National Finalist – Pitch Perfect, IIT Bombay (Top 10 out of 1000+ participants)</li>
                <li>Top 15 – Xpanse B-Plan, IIT (BHU) Varanasi (800+ teams)</li>
                <li>Top 8 – Disrupt, XLRI Jamshedpur (1,200+ entries)</li>
              </ul>
            </div>
          </div>
          {/* Card 3: Industry Innovation Competitions */}
          <div className={`${cardBase} ${cardBorder} ${cardOverlay} ${cardAnim}`} style={{animationDelay: '0.5s', animationFillMode: 'backwards'}}>
            <img src={mastersUnionImg} alt="Masters' Union" className={imgClass} />
            <div className="p-4 sm:p-6 lg:p-8 flex-1 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 mb-3 sm:mb-4 border-b-2 border-purple-200 pb-2 font-sans tracking-tight drop-shadow-sm">Industry Innovation Competitions</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                <li>Winner – AI Electrify Challenge, Masters' Union</li>
                <li>Led National AI project on India’s $7B EV market</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
}

