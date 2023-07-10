import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

function LoginScreen({ navigation }) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onRegisterScreenPress = () => {
        navigation.navigate('RegisterScreen');
    }

    const onEnterPress = async () => {
        /*
        здесь будет провека на наличие логина в бд
        */

        /*
        здесь будет провека на пароль
        */

        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.constainer}>
            <Text style={styles.header}>
                Авторизация
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Фамилия_ИО_23'
                onChange={(login) => setLogin(login)}
                placeholderTextColor={'#58657a'}
            />
            <TextInput
                style={styles.input}
                placeholder='Пароль'
                onChange={(password) => setPassword(password)}
                placeholderTextColor={'#58657a'}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.enter}
                onPress={onEnterPress}
            >
                <Text style={styles.enterText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={onRegisterScreenPress}
                style={styles.textContainer}>
                    <Text style={styles.text}>Вы здесь впервые?</Text>
                    <Text style={[styles.text, {textDecorationLine: 'underline'}]}>Зарегестрируйтесь</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#385b94',
    },
    header: {
        fontSize: responsiveScreenFontSize(4),
        fontWeight: 'bold',
        color: '#e0e0e0',
        marginBottom: responsiveScreenHeight(2.5),
    },
    input: {
        width: responsiveScreenWidth(75),
        height: responsiveScreenHeight(6.4),
        margin: responsiveScreenHeight(0.8),
        borderRadius: 15,
        fontSize: responsiveScreenFontSize(2.1),
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 15,
        color: '#385b94'
    },
    enter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveScreenWidth(75),
        height: responsiveScreenHeight(5),
        margin: responsiveScreenHeight(1),
        borderRadius: 15,
        backgroundColor: '#e0e0e0',
    },
    enterText: {
        fontSize: responsiveScreenFontSize(2.1),
        fontWeight: '500',
        color: '#385b94',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveScreenHeight(0.8),
    },
    text: {
        fontSize: responsiveScreenFontSize(1.85),
        color: '#e0e0e0'
    },
});