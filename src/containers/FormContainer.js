import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'
import Geocoder from 'react-native-geocoding';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   address: 'edinburgh',
   lat: null,
   lng: null
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

 findCoordinates() {

  Geocoder.setApiKey('AIzaSyDFgBkCpgmp_RGfRAHqZcD4fAz2qzCn6bk');

  Geocoder.getFromLocation(this.state.address).then(
  json => {
   console.log(json.results);

  },
  error => {
   console.log(error);
  }
  );
 }

 render() {
  return(
   <form className="geocoder-form">
    <ul>
     <li><br/><hr className="style1"/></li>
       <li><input type="text" placeholder="Address" onKeyPress={ this.handleKeyPress } onChange={ this.updateAddress }/></li>
       <InfoBoxes/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
