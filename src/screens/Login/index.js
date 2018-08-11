import React, { Component } from 'react';
import YsLogo from '../../theme/components/YsLogo';
import { Container, Content, Header, Body, Title, Button, Text, View } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <YsLogo />
            <Title>Yamsafer</Title>
          </Body>
        </Header>

        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
