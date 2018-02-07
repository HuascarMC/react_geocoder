import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'
import Geocoder from 'react-native-geocoding';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   address: 'edinburgh',
   api_key: 'AIzaSyDFgBkCpgmp_RGfRAHqZcD4fAz2qzCn6b',
  }
  this.updateAddress = this.updateAddress.bind(this);
  Geocoder.setApiKey(this.state.api_key);
}

 updateAddress(evt) {
   if (evt.key === 'Enter') {
    this.setState({
     address: evt.target.value
    })
    console.log(evt.target.value);
   }
 }


 findCoordinates(address) {
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
       <li><input type="text" placeholder="Address" onKeyPress={ this.updateAddress }/></li>
       <InfoBoxes/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
