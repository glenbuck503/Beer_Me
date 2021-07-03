import React from "react";
import PropTypes from "prop-types";
import TapDetail from './TapDetail';

function Tap(props) {
  return (
   
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
      
        <h3>{props.names}</h3>
        <p><em>{props.pint}</em></p>
        <hr/>
      </div>

    </React.Fragment>
  );
}

export default Tap;