import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/AutoLanka.png';

export default function Splash({ navigation }) {

    const [isGo, setIsGo] = useState(true);

    useEffect(() => {
        if (isGo == true) {
            setTimeout(() => {
                navigation.navigate("Login")
                setIsGo(false);
            }, 2000);
        }
    });

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
    },

    logo: {
        width: 200,
        height: 30,
        marginBottom: 100
    }
})