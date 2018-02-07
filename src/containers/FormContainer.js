import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'
import Geocoder from 'react-native-geocoding';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);
}

 render() {
  return(
   <form className="geocoder-form">
    <ul>
     <li><br/><hr className="style1"/></li>
       <li><input type="text" placeholder="Address"/></li>
       <InfoBoxes/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
