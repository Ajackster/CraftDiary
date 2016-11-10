import React from 'react';
import { connect } from 'react-redux';
import { getFormItems } from '../../database/SQLite';
import FormList from '../../components/FormList';

class HomeScreenListContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onCreatePress = this._onCreatePress.bind(this);
  }
  componentDidMount() {
    this.props.getFormItems();
  }
  _onCreatePress() {
    this.props.navigator.push({
      id: 'create'
    })
  }
  render() {
    return (
      <FormList
        formItems={this.props.homeScreenList}
        onCreatePress={this._onCreatePress}
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
  return {
    getFormItems: () => getFormItems(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenListContainer);
