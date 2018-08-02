import React, { Component } from 'react';
import { Header, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { api } from '../Utils/api';
import Dashboard from './Dashboard'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    TouchableHighlight
  } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit() {
    const { navigate } = this.props.navigation;
    // update spinning indicator
    this.setState({
      isLoading: true
    });
    // fetch data from github
    api.getBio(this.state.username)
      .then((res) => {
        this.props.navigator.push({
          screen: 'example.Types.Push',
          title: `Screen 1`,
          passProps: {
            count: 3
          }
        });
        // if (res.message && res.message === 'Not Found') {
        //   this.props.navigator.push({
        //     component: Dashboard,
        //     title: 'Dashboard',
        //     passProps: res,
        //   });
        //   this.setState({
        //     error: 'User not found',
        //     isLoading: false
        //   });
        // } else {
        //   // reset state
        //   this.setState({
        //     error: false,
        //     isLoading: false,
        //     username: ''
        //   });
        // }
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY FIRST TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View style={styles.content}>
          <Text style={styles.title}> Search for github user </Text>
          <TextInput
            placholder='Whats needed to be done here'
            returnKeyType='done'
            value={this.state.username}
            onChange={this.handleChange.bind(this)}
          />
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigate('Dashboard', { name: 'Jane' })
            }
          />

          <TouchableHighlight
            raised
            icon={{name: 'cached'}}
            title='Test Me!'
            onPress={this.handleSubmit.bind(this)}>
              <Text style={styles.buttonText}> SEARCH </Text>
            </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {paddingTop: 30}
    })
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 15
  },
  button: {
    backgroundColor: '#ccc'
  }
});
