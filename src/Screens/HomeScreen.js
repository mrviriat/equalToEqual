import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
    return (
        <View style={styles.constainer}>
            <View style={{height: 200, width: 200, backgroundColor: 'red' }}></View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});