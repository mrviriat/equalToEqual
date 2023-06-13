import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function SettingsScreen() {
  return (
    <View style={styles.constainer}>
      <View style={{ height: 300, width: 300, backgroundColor: 'black' }}></View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});