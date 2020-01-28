import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Row extends Component {
  constructor(props){
  }
  render(){
    return (
      <View style={ styles.row }>
       { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row'
  }
});

export default Row;
