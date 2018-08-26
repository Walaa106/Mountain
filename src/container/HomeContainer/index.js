import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from 'screens/Home';
import datas from './data';
import { fetchList } from './actions';

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.fetchList(datas);
  }
  render() {
    return <Home navigation={this.props.navigation} list={this.props.data} />;
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});

HomeContainer.PropTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object,
};

export default connect(mapStateToProps, bindAction)(HomeContainer);
