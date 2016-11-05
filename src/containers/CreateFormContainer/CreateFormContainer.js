import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onTitleChange, onDescriptionChange, onSavePress } from '../../redux/modules/Forms/FormScreenRedux';
import FormScreen from '../../components/FormScreen';

const CreateFormContainer = ({ onTitleChange, onDescriptionChange, onSavePress }) => {
  return (
    <FormScreen
      onTitleChange={onTitleChange}
      onDescriptionChange={onDescriptionChange}
      onSavePress={onSavePress}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    formScreen: state.formScreen
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    onTitleChange: onTitleChange,
    onDescriptionChange: onDescriptionChange,
    onSavePress: onSavePress
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer);
