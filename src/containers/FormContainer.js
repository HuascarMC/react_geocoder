import React from 'react';

class FormContainer extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <form className="geocoder-form">
    <ul>
       <li><input type="text" placeholder="Address"/></li>

    </ul>
   </form>
  )}
 }

export default FormContainer;
