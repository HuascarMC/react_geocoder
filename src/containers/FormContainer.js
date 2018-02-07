import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'
import Geocoder from 'react-native-geocoding';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   address: 'edinburgh',
   lat: "Latitude",
   lng: "Longitude",
   error: ""
  }
  this.updateAddress = this.updateAddress.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.findCoordinates = this.findCoordinates.bind(this);
}

 updateAddress(evt) {
    this.setState({
     address: evt.target.value
    })
    console.log(this.state.address);
 }

handleKeyPress(evt) {
  if (evt.key === 'Enter') {
   this.findCoordinates();
  }
}

handleError() {
 this.setState({
  error: "Not found"
 })
}

 findCoordinates() {

  Geocoder.setApiKey('AIzaSyDFgBkCpgmp_RGfRAHqZcD4fAz2qzCn6bk');

  Geocoder.getFromLocation(this.state.address).then(
   json => {
    console.log(json.results);
    var location = json.results[0].geometry.location;
    this.setState({lat: location.lat, lng: location.lng, error: ""});
   },
   error => {
    console.log(error);
    this.handleError();
   }
  );
 }

 render() {
  return(
   <form className="geocoder-form">
    <ul>
     <p>{ this.state.error }</p>
     <li><br/><hr className="style1"/></li>
       <li><input type="text" placeholder="Address" onKeyPress={ this.handleKeyPress } onChange={ this.updateAddress }/></li>
       <InfoBoxes lat={ this.state.lat} lng={ this.state.lng }/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
