import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AddNewWords from '../components/insert-data'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Home Screen Component</Text>
        <AddNewWords />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
