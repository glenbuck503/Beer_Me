import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const {tap, onClickingDelete, onClickingEdit,onSubtractPint} = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.names}</h3>
      <h3>{tap.pint}</h3>
      <button onClick={ ()=> onClickingEdit(props.pint) }>Update Tap</button> 
      
      <button onClick={()=> onClickingDelete(tap.id) }>Remove Tap</button>

      <button onClick={() => onSubtractPint(tap.id)}>Drink</button>
      </React.Fragment>
  );
}


TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSubtractPint: PropTypes.func
};

export default TapDetail;