import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import theme from '../config/colors.js';

//propiedades
// text : recibe el texto a mostrar

class Label extends Component {
  render(){
    return(
      <View>
        <Text style={ styles.label }>{ this.props.text }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold'
  }
});


export default Label;
