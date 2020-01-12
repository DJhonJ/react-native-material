import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import Constants from 'expo-constants';

//Mis Components
import Row from './src/components/Row.js';

class App extends Component {
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
              <TextInput style={ styles.input } />
            </View>
          </View>

          <View style={ styles.col }>
            <View style={ styles.group }>
              <TextInput style={ styles.input } />
            </View>
          </View>
        </View>

        <View style={ styles.group }>
          <TextInput style={styles.input} placeholder="Ingresa un valor" value={this.state.value}
                     onChangeText={ text => { this.setState({ value: text }); } } />
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
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    padding: 4,
    borderRadius: 2
  },
  button: {
  }
});

export default App;
