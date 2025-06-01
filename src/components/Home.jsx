import React from 'react'
import Events from './Events'
import TeamMembers from './TeamMembers'
import HeroSection from './HeroSection'
import Footer from './Footer'
import FAQ from './FAQ'

function Home() {
  return (
    <div>
       <HeroSection />
       <Events />
       <TeamMembers />
       <FAQ />
       <Footer />
    </div>
  )
}

export default Home
