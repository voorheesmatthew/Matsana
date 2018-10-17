import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import NewProjectForm from '../main/home/new_project_form_container';
import UpdateProjectForm from '../main/project/update_project_form_container';



function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'project':
      component = <NewProjectForm />;
      break;
    case 'updateProject':
      component = <UpdateProjectForm />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};






export default connect(mapStateToProps, mapDispatchToProps)(Modal);
