import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const {tap, onClickingDelete, onClickindEdit,onSubtractPint} = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.names}</h3>
      <h3>{tap.pint}</h3>
      </React.Fragment>
  );
}