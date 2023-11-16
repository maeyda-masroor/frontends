import React from 'react'
import Form from './Form';
import './contact-section.css'
import Info from './Info';
import MapSection from '../map/Map' // import the map here
function ContactSection (){
  const location = {
    address: 'NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700',
    lat:24.948741,
    lng: 67.04497,
  }
  return ( 
    <div className="contact-section gap-4">
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <Info/>
    </div>
  )

}

export default ContactSection
