import React from 'react';
import Tap from './Tap';
import PropTypes from "prop-types";

function TapList(props){
  const {tap, onClickingDelete, onClickingEdit,onSubtractPint} = props;
  return (
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap) =>
        <Tap
          whenTapClicked = { props.onTapSelection }
          names={tap.names}
          pint={tap.pint}
          id={tap.id}/>

          
       
      )}
      
      
    </React.Fragment>
    
  );
}
TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,

};

export default TapList;