import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './src/components/screen/Home.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);
