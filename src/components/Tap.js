import React from "react";
import PropTypes from "prop-types";
import TapDetail from './TapDetail';



function Tap(props){
 

  return (
    
   
    <React.Fragment>
 
      <div onClick = {() => props.whenTapClicked(props.id)}>
      
        <h3>{props.names}</h3>
    

        <h3>{props.pint}</h3>
        <h3>{props.alcohol}</h3>
        


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
  pint: PropTypes.number,
  alcohol: PropTypes.number,
  id: PropTypes.string
  
};

export default Tap;