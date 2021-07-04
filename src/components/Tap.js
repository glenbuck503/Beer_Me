import React from "react";
import PropTypes from "prop-types";
import TapDetail from './TapDetail';


function Tap(props){

  return (
   
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
      
        <p>{props.names}</p>
        <p>{props.alcohol}</p>
        <p><em>{props.pint}</em></p>
        <hr/>
      </div>

    </React.Fragment>
  );
}
TapDetail.propTypes = {
  tap: PropTypes.object
}

Tap.propTypes = {
  whenTapClicked: PropTypes.func,
  names: PropTypes.string,
  alcohol: PropTypes.string,
  pint: PropTypes.number,
  id: PropTypes.string
  
};

export default Tap;