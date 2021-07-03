import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm(props){
  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({names: event.target.names.value, pint: event.target.pint.value, id: tap.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Update Tap" />
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func
};

export default EditTapForm;