import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'
import Geocoder from 'react-native-geocoding';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   address: null,
   api_key: 'AIzaSyDFgBkCpgmp_RGfRAHqZcD4fAz2qzCn6b',
  }
  this.updateAddress = this.updateAddress.bind(this);
}

 updateAddress(evt) {
  this.setState({
   address: evt.target.value
  })
  console.log(this.state.address);
 }

 findCoordinates(address, api_key) {
   Geocoder.setApiKey('AIzaSyDFgBkCpgmp_RGfRAHqZcD4fAz2qzCn6bk');

   Geocoder.getFromLocation(address).then(
     json => {
     console.log(json.results);
   },
     error => {
      console.log(error);
     });
 }

 render() {
  return(
   <form className="geocoder-form">
    <ul>
     <li><br/><hr className="style1"/></li>
       <li><input type="text" placeholder="Address" onChange={this.updateAddress}/></li>
       <InfoBoxes/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
