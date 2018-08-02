import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { styles } from './Main';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text> This is a dashboard. Yeah. </Text>
      </View>
    )
  }
}