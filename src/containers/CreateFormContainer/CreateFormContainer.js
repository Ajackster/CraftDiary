import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onTitleChange, onDescriptionChange, onCreateSavePress } from '../../redux/modules/Forms/FormScreenRedux';
import FormScreen from '../../components/FormScreen';

class CreateFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onSavePress = this._onSavePress.bind(this);
    this._onBackPress = this._onBackPress.bind(this);
  }
  _onSavePress() {
    this.props.onCreateSavePress();
    this.props.navigator.push({
      id: 'home'
    })
  }
  _onBackPress() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <FormScreen
        onTitleChange={this.props.onTitleChange}
        onDescriptionChange={this.props.onDescriptionChange}
        onSavePress={this._onSavePress}
        onBackPress={this._onBackPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formScreen: state.formScreen
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    onTitleChange: onTitleChange,
    onDescriptionChange: onDescriptionChange,
    onCreateSavePress: onCreateSavePress
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFormContainer);
