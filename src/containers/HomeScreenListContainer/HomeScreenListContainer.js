import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { loadFormItems } from '../../redux/modules/HomeScreenList/HomeScreenList';
import { loadFormScreen } from '../../redux/modules/Forms/FormScreenRedux';
import FormList from '../../components/FormList';

class HomeScreenListContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onCreatePress = this._onCreatePress.bind(this);
    this._onFormItemPress = this._onFormItemPress.bind(this);
  }
  componentDidMount() {
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
      this.props.loading ?
      <View style={{ flex: 1, backgroundColor: '#FFF' }} /> :
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
    homeScreenList: state.homeScreenList,
    loading: state.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadFormItems: () => loadFormItems(dispatch),
    loadFormScreen: (id) => loadFormScreen(dispatch, id)
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenListContainer);
