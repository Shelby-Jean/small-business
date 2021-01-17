import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationPin = ({ text }) => (
  <div>
    <LocationOnIcon />
    <p style={{margin: 0}}>{text}</p>
  </div>
)

export default LocationPin;