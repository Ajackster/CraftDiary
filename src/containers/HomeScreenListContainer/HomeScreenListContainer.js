import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadFormItems } from '../../redux/modules/HomeScreenList/HomeScreenList';
import { loadFormScreen } from '../../redux/modules/Forms/FormScreenRedux';
import FormList from '../../components/FormList';

class HomeScreenListContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onCreatePress = this._onCreatePress.bind(this);
    this._onFormItemPress = this._onFormItemPress.bind(this);
  }
  componentWillMount() {
    this.props.loadFormItems();
  }
  _onCreatePress() {
    this.props.navigator.push({
      id: 'create'
    })
  }
  _onFormItemPress(id) {
    this.props.loadFormScreen(id);
    this.props.navigator.push({
      id: 'edit'
    })
  }
  render() {
    return (
      <FormList
        formItems={this.props.homeScreenList}
        onCreatePress={this._onCreatePress}
        onFormItemPress={this._onFormItemPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    homeScreenList: state.homeScreenList
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadFormItems: () => loadFormItems(dispatch),
    loadFormScreen: (id) => loadFormScreen(dispatch, id)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenListContainer);
