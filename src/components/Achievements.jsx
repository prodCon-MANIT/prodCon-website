import React from 'react';
import web_gradient from '../assets/web_gradient_rev.png';
import iitBombayImg from '../assets/iit_bombay.jpg';
import iimCalcuttaImg from '../assets/iim_calcutta.jpg';
import mastersUnionImg from '../assets/masters_union.png';

export default function Achievements() {
  return (
    <section
      id="achievements-section"
      className="w-full mx-auto bg-cover bg-center relative flex flex-col items-center justify-center min-h-screen select-none"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 w-full max-w-4xl px-6 py-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
          Our Achievements
        </h2>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <span className="text-white/90 text-lg font-light">Highlights</span>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="space-y-12 w-full">
          {/* Card 1: Top National & International Recognition */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={iitBombayImg} alt="IIT Bombay" className="w-full md:w-1/3 h-48 object-cover" />
            <div className="p-8 flex-1">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-300 pb-1">Top National & International Recognition</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Won the International Cenex Award – IIT Bombay</li>
                <li>Top 3 Teams – The Boardroom Marketing Competition, IIM Calcutta</li>
                <li>Finalist – Techniche, IIT Guwahati (Northeast India’s largest tech fest)</li>
              </ul>
            </div>
          </div>
          {/* Card 2: Case & B-Plan Competitions (zigzag) */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={iimCalcuttaImg} alt="IIM Calcutta" className="w-full md:w-1/3 h-48 object-cover" />
            <div className="p-8 flex-1">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-300 pb-1">Case & B-Plan Competitions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>National Finalist – Pitch Perfect, IIT Bombay (Top 10 out of 1000+)</li>
                <li>Top 15 – Xpanse B-Plan, IIT (BHU) Varanasi (800+ teams)</li>
                <li>Top 10 – Pitch Perfect, FMS Delhi (900+ submissions)</li>
                <li>Top 12 – Fetching Fortunes, E-Cell IIT Hyderabad (1,500+ startups)</li>
                <li>Top 8 – Disrupt, XLRI Jamshedpur (1,200+ entries)</li>
              </ul>
            </div>
          </div>
          {/* Card 3: Industry Innovation Competitions */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={mastersUnionImg} alt="Masters' Union" className="w-full md:w-1/3 h-48 object-cover" />
            <div className="p-8 flex-1">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 border-b border-purple-300 pb-1">Industry Innovation Competitions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>Winner – AI Electrify Challenge, Masters' Union</li>
                <li className="pl-6 text-sm text-blue-700">Led national AI project on India's $7B EV market</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

