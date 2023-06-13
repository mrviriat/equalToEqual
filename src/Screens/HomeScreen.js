import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.constainer}>
            <View style={{
                height: 200, width: 200, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 20, color: 'black' }}>1</Text>
            </View>
            <View style={{
                height: 200, width: 200, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 20, color: 'black' }}>2</Text>
            </View>
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