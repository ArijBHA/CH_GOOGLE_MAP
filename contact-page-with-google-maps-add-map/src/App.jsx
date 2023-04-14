import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map' // import the map here
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './app.css'

const location = {
  address: 'GOMYCODE Tunis Centre Ville, 2ème étage, 2 Rue Charles de Gaulle, Tunis 1000',
  lat: 36.799150,
  lng: 10.177690,
} // our location object from earlier

const App = () => (
  <div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <DisclaimerSection />
    <FooterSection />
  </div>
)

export default App
