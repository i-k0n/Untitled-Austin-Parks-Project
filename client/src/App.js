import { MapContainer, TileLayer } from 'react-leaflet'
// import * as siteData from './data/barton-creek-hotspots.json'
import './App.css'

function App() {
  const position = [30.25844534968869, -97.80411406405295]

  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=${process.env.REACT_APP_MAP_TILER_KEY}`}
      />
    </MapContainer>
  )
}

export default App;
