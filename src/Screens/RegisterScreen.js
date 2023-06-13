import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function RegisterScreen({ navigation }) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onRegisterScreenPress = () => {
        navigation.navigate('RegisterScreen');
    }

    const onEnterPress = async () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.constainer}>
            <View style={{ height: 150, width: 150, backgroundColor: 'green' }}></View>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});