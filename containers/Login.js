import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { NavbarLogin } from '../components/core/navbar'

import API from '../utils/API'

function Login({ match, history }) {
    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [validatorEmail, onValidEmail] = useState(styles.textMute);
    const [validatorPassword, onValidPassword] = useState(styles.textMute);
    
    const [responceEmail, responceValidEmail] = useState(true);
    const [responcePassword, responceValidPassword] = useState(true);

    const onSubmitLogin = () => {
        if (responceEmail && responcePassword) {
            //console.log(responceEmail , responcePassword)
            onChangeEmail(null); onValidEmail(styles.textMute)
            onChangePassword(null); onValidPassword(styles.textMute)
            history.push('/hotels')
        }
    };
    const validateEmail = (text) => {
        //console.log('email' , text)       	
        onChangeEmail(text)
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //console.log('validateEmail',re.test(text) ) 
        responceValidEmail(re.test(text))
        onValidEmail(re.test(text) === false ? styles.textError : styles.textSuccess)
    };
    const validatePassword = (text) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        onChangePassword(text)
        responceValidPassword(re.test(text))
        onValidPassword(re.test(text) === false ? styles.textError : styles.textSuccess)
    };

    return (
        <>
            <NavbarLogin brand="Trippy" />
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Login</Text>
                <TextInput
                    style={[styles.textarea, validatorEmail]}
                    placeholder="Edit your email"
                    onChangeText={text => validateEmail(text)}
                    value={email}
                />
                <TextInput secureTextEntry={true} style={[styles.textarea, validatorPassword]}
                    placeholder="abcdefgh"
                    onChangeText={text => validatePassword(text)}
                    value={password} />
                <Button
                    onPress={onSubmitLogin}
                    title="LOGIN"
                    color="#841584"
                    accessibilityLabel="Click this purple button for login"
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 40,
        flex: 1,
        // backgroundColor : "#000"
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 40,
        textAlign: "center",
    },
    textarea: {
        marginBottom: 10,
        height: 40,
        borderWidth: 2,
        padding: 10,
    },
    textMute: {
        borderColor: 'gray',
    },
    textError: {
        borderColor: 'red',
    },
    textSuccess: {
        borderColor: 'green',
    },
});

export default Login;