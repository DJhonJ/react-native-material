import React from 'react';
import { View, StyleSheet } from 'react-native';

class Col extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={ styles.col }>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    flex: 1
  },
});

export default Col;
