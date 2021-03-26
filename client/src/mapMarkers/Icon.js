import L from 'leaflet';
import sharpWater from '../mapMarkers/iconWater.svg'

const iconWater = new L.Icon({
    iconUrl: sharpWater,
    iconRetinaUrl: sharpWater,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(28, 28),
    className: 'leaflet-div-icon'
});

export { iconWater };