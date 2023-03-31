import React, { useState, useEffect } from 'react'
import { MapContainer } from './Ubicacion_Mapa.Styles'

export default function Ubicacion_Mapa() {
  const [map, setMap] = useState(null)

  window.initMap = () => {
    const newMap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -5.176977, lng: -80.654258 },
      zoom: 15,
    })
    const marker = new window.google.maps.Marker({
      position: { lat: -5.176977, lng: -80.654258 },
      map: newMap,
    })
    setMap(newMap)
  }

  useEffect(() => {
    const script = document.createElement('script')

    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&libraries=places&mode=dev&callback=initMap'

    document.body.appendChild(script)
  }, [])

  return <MapContainer id="map" />
}
