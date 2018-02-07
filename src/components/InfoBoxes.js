import React from 'react';

class InfoBoxes extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <div>
   <li><input className="disabled" type="text" placeholder="latitude" disabled/></li>
   <li><input className="disabled" type="text" placeholder="longitude" disabled/></li>
  </div>
  )}
 }

export default InfoBoxes;
