import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as USGSData from './data/barton-creek-hotspots.json'
import * as greenbeltTrailheadData from "./data/barton-creek-greenbelt-trailheads.json"
import './App.css'
// import { Icon, InlineIcon } from '@iconify/react';
// import { iconWater } from './mapMarkers/Icon'
// import sharpWater from '@iconify-icons/ic/sharp-water';

const USGSLocations = USGSData.locations
const greenbeltTrailheads = greenbeltTrailheadData.locations


function App() {
  const [activeSite, setActiveSite] = useState(null)
  const position = [30.25844534968869, -97.80411406405295]



  return (
    <>
    <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
      />

      {USGSLocations.map(site => {
        return (
          <Marker 
            key={site.properties.siteNum} 
            position={[site.geometry.coordinates[1], site.geometry.coordinates[0]]}
            // icon={ iconWater }
            eventHandlers={{
              click: () => {
                setActiveSite(site)
              }
            }}
          />
        )
      })}

      {greenbeltTrailheads.map(site => {
        return (
          <Marker 
            key={site.properties.siteNum} 
            position={[site.geometry.coordinates[1], site.geometry.coordinates[0]]}
            // icon={ iconWater }
            eventHandlers={{
              click: () => {
                setActiveSite(site)
              }
            }}
          />
        )
      })}

      {activeSite && (
        <Popup
        position={[activeSite.geometry.coordinates[1], activeSite.geometry.coordinates[0]]}
        onClose={() => setActiveSite(null)}
        >
          <div>
            <h2>{activeSite.properties.name}</h2>
            <p>{activeSite.properties.description}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
    </>
  )
}

export default App;
