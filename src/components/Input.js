import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import theme from '../config/colors.js';

class Input extends Component {
  render() {
    return (
      <View>
        <TextInput style={ styles.input } placeholder={this.props.placeholder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    minHeight: 40,
    borderBottomWidth: 1,
    borderColor: theme.gray1
  }
});

export default Input;

//<TextInput style={styles.input} placeholder="Ingresa un valor" value={this.state.value}
           //onChangeText={ text => { this.setState({ value: text }); } } />
