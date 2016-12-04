import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onTitleChange, onDescriptionChange, onEditSavePress } from '../../redux/modules/Forms/FormScreenRedux';
import FormScreen from '../../components/FormScreen';

class EditFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onSavePress = this._onSavePress.bind(this);
    this._onBackPress = this._onBackPress.bind(this);
  }
  _onSavePress() {
    this.props.onEditSavePress();
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
        onAddImage={this.props.onAddImage}
        onSavePress={this._onSavePress}
        onBackPress={this._onBackPress}
        title={this.props.formScreen.title}
        description={this.props.formScreen.description}
        images={this.props.formScreen.images}
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
    onEditSavePress: onEditSavePress
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFormContainer);
