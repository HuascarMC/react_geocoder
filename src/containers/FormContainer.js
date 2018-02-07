import React from 'react';
import InfoBoxes from '../components/InfoBoxes.js'

class FormContainer extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <form className="geocoder-form">
    <ul>
       <li><input type="text" placeholder="Address"/></li>
       <InfoBoxes/>
    </ul>
   </form>
  )}
 }

export default FormContainer;
