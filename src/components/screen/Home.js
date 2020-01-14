import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import Constants from 'expo-constants';

//Mis Components
import Row from '../Row.js';
import Input from '../Input.js';
import Label from '../Label.js';

class Home extends Component {
  constructor() {
    super();

    this.state = { value : '' }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.row }>

          <View style={ styles.col }>
            <View style={ styles.group }>
              <Label text="Ingresa un valor" />
              <Input />
            </View>
          </View>

          <View style={ styles.col }>
            <View style={ styles.group }>
              <Label text="Ingresa un valor" />
              <Input />
            </View>
          </View>
        </View>

        <View style={ styles.group }>
          <Input placeholder="Ingresa un valor" />
        </View>

        <View style={ styles.group }>
          <Button title="show value" onPress={ () => { alert(this.state.value); } } />
        </View>

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
  },
  row: {
    flex: 0,
    flexDirection: 'row',
  },
  col: {
    flex: 1
  },
  group: {
    margin: 5
  },
  button: {
  }
});

export default Home;
