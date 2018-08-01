import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, TextInput, TouchableHighlight } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { api } from './Utils/api';

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
    // update spinning indicator
    this.setState({
      isLoading: true
    });
    // fetch data from github
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message && res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          });
        } else {
          console.log('------------------------------------');
          console.log(res, "MEW");
          console.log('------------------------------------');
          // reset state
          this.setState({
            error: false,
            isLoading: false,
            username: ''
          });
        }
      });
  }

  render() {
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
            raised
            icon={{name: 'cached'}}
            title='Test Me!'
            onPress={this.handleSubmit.bind(this)} />
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
