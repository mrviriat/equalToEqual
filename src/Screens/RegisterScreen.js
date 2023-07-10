import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';


function RegisterScreen({ navigation }) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secondPassword, setSecondPassword] = React.useState('');

    const validateLoginAndPassword = () => {
        const loginRegex = /^[a-zA-Z0-9]+$/; // Регулярное выражение для проверки допустимых символов
        
        /*
        здесь будет провека на существование введенного логина
        */

        if (login === '') {
            Alert.alert('Эй!', 'Ну ты хоть что то в логин введи для приличия...');
            return false;
        }

        if (password.trim().length < 4 || password.trim().length > 10 || !loginRegex.test(password)) {
            Alert.alert('Внимание!', 'Длинна пароля должна быть 4-10. Так же допустимы символы A-Z и 0-9.');
            return false;
        }

        if (password !== secondPassword) {
            Alert.alert('Внимание!', 'Пароли не совпадают!');
            return false;
        }

        return true;
    }

    const onLoginScreenPress = () => {
        navigation.navigate('LoginScreen');
    }

    const onEnterPress = async () => {
        if (!validateLoginAndPassword()) {
            return;
        }

        navigation.navigate('LoginScreen');
    }

    return (
        <View style={styles.constainer}>
            <Text style={styles.header}>
                Регистрация
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Фамилия_ИО_23'
                onChangeText={(text) => setLogin(text)}
                placeholderTextColor={'#58657a'}
            />
            <TextInput
                style={styles.input}
                placeholder='Пароль'
                onChangeText={(text) => setPassword(text.trim())}
                placeholderTextColor={'#58657a'}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder='Повторите пароль'
                onChangeText={(text) => setSecondPassword(text.trim())}
                placeholderTextColor={'#58657a'}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.enter}
                onPress={onEnterPress}
            >
                <Text style={styles.enterText}>Создать аккаунт</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onLoginScreenPress}
                style={styles.textContainer}>
                <Text style={styles.text}>Есть аккаунт?</Text>
                <Text style={[styles.text, { textDecorationLine: 'underline' }]}>Войдите</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
    },
    header: {
        fontSize: responsiveScreenFontSize(3.8),
        fontWeight: 'bold',
        color: '#385b94',
        marginBottom: responsiveScreenHeight(2.5),
    },
    input: {
        width: responsiveScreenWidth(75),
        height: responsiveScreenHeight(6),
        margin: responsiveScreenHeight(0.8),
        borderRadius: 15,
        borderColor: '#385b94',
        borderWidth: 2,
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
        borderColor: '#385b94',
        borderWidth: 2,
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
        color: '#385b94',
    },
});