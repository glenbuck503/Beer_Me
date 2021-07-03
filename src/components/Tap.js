import React from "react";
import PropTypes from "prop-types";
import TapDetail from './TapDetail';

function Tap(props) {
  const { tap, onClickingDelete , onClickingEdit, onSubtractPint} = props; 
  return (
   
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
      
        <h3>{props.names}</h3>
        <p><em>{props.pint}</em></p>
 
        <p>sdfsdfsd</p>
    

        <hr/>
      </div>
      
    
  

    </React.Fragment>
    
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onSubtractPint: PropTypes.func,
}

Tap.propTypes = {
  whenTapClicked: PropTypes.func,
  onSubtractPint: PropTypes.func,

  names: PropTypes.string,
  pint: PropTypes.number,
  id: PropTypes.string
  
};


export default Tap;