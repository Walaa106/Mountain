import React from 'react';
// import React, { Component } from 'react';
import YsLogo from '../../theme/components/YsLogo';
import { Container, Content, Header, Body, Button, Text, View } from 'native-base';

export default class Login extends React.Component {
  render() {
    return (
      <div>{/* <YsLogo /> */}</div>
      // <Container>
      //   <Header style={{ height: 100 }}>
      //     <Body style={{ alignItems: 'center' }}>{/* <YsLogo /> */}</Body>
      //   </Header>

      //   <Content>
      //     {this.props.loginForm}
      //     <View padder>
      //       <Button block onPress={() => this.props.onLogin()}>
      //         <Text>Login</Text>
      //       </Button>
      //     </View>
      //   </Content>
      // </Container>
    );
  }
}
