import React from 'react';
import FormList from '../../components/FormList';

class HomeScreenListContainer extends React.Component {
  constructor(props) {
    super(props);
    this._onCreatePress = this._onCreatePress.bind(this);
  }
  _onCreatePress() {
    this.props.navigator.push({
      id: 'create'
    })
  }
  render() {
    return (
      <FormList onCreatePress={this._onCreatePress} />
    )
  }
}

export default HomeScreenListContainer;