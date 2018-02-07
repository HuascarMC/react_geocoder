import React from 'react';

class InfoBoxes extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return(
   <div>
    <li><input className="disabled" type="text" placeholder={ this.props.lat } disabled/></li>
    <li><input className="disabled" type="text" placeholder={ this.props.lng } disabled/></li>
   </div>
  )}
 }

export default InfoBoxes;
