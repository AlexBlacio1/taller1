import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { RouteProp } from '@react-navigation/native';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>;

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};

function LoginScreen({ navigation }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Iniciar Sesión" onPress={() => {/* Manejar inicio de sesión */ }} />
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.link}>¿No tienes una cuenta? Regístrate ahora</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingLeft: 8 },
    link: { color: 'blue', marginTop: 16, textAlign: 'center' },
});

export default LoginScreen;
