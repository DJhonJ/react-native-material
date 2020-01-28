import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Group extends Component {
  constructor(props){
  }
  render(){
    return (
      <View style={ styles.group }>
       { this.props.schildren }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    margin: 5
  }
});

export default Group;
