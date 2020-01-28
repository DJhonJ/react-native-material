import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import Constants from 'expo-constants';

//Mis Components
import Row from '../Row.js';
import Input from '../Input.js';
import Label from '../Label.js';
import Col from '../Col.js';
import Group from '../Group.js';

class Home extends Component {
  constructor() {
    super();
    this.state = { value : '' }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Row>
          <Col>
            <Group>
              <Label text="Ingresa un valor" />
              <Input />
            </Group>
          </Col>

          <Col>
            <Group>
              <Label text="Ingresa un valor" />
              <Input />
            </Group>
          </Col>
        </Row>

        <Group>
          <Input placeholder="Ingresa un valor" />
        </Group>

        <Group>
          <Button title="show value" onPress={ () => { alert(this.state.value); } } />
        </Group>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    marginTop: Constants.statusBarHeight,
  }
});

export default Home;
