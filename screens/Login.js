import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Button, Checkbox, StatusBar, ScrollView, VStack, Center } from "native-base";
import loginBg from '../assets/bmw-z4.jpg';
import { TextInput } from 'react-native-gesture-handler';


export default function Login({ navigation }) {
    return (
        <NativeBaseProvider>
            <Box style={styles.container1}>
                <Image style={styles.bgImg} source={loginBg}></Image>
            </Box>

            <Box style={styles.container2}>
                <ScrollView w='100%' h='100%'>
                    <VStack h='810' w='100%'>

                        <Text style={styles.txtColor}>Login</Text>
                        <Text style={styles.txt2Color}>Welcome back please login to your account</Text>

                        <Center>
                            <Input variant="rounded" placeholder="User name" position={'relative'} color="#FFFFFF" w="85%" top={'50%'} p={'3'} borderRadius={'18'} />
                            <Input variant="rounded" placeholder="Password" position={'relative'} color="#FFFFFF" w="85%" top={'54%'} p={'3'} borderRadius={'18'} />
                        </Center>

                        <Checkbox value="yellow" colorScheme="yellow" size="md" position={'relative'} top={'57%'} ml={'8%'} bgColor="black">Remember me</Checkbox>

                        <Center>
                            <Button position={'relative'} colorScheme="yellow" size="lg" top="60%" w="85%" borderRadius={'18'} onPress={() => console.log("hello world")}>Login</Button>
                        </Center>
                 
                        <Text style={styles.txt4Color}>Forgot Password?</Text>
                        <Text style={styles.txt5Color}>Don’t have an account?</Text>
                        <Text style={styles.txt6Color}>Registrar</Text>

                    </VStack>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    container2: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },

    bgImg: {
        width: '100%',
        height: '100%',
        opacity: 0.35
    },

    txtColor: {
        position: 'relative',
        color: '#FFFFFF',
        fontSize: 34,
        top: '20%',
        left: '8%'
    },

    txt2Color: {
        position: 'relative',
        color: '#FFFFFF',
        fontSize: 15,
        top: '21%',
        left: '8%',
        opacity: 0.75
    },

    txt4Color: {
        position: 'relative',
        color: '#FFFFFF',
        fontSize: 15,
        top: '32%',
        opacity: 0.75,
        left:'34%'
    },

    txt5Color: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 15,
        top: '94%',
        marginLeft: '18%',
        opacity: 0.75
    },

    txt6Color: {
        position: 'absolute',
        color: '#FDCE4B',
        fontSize: 15,
        top: '94%',
        marginLeft: '61%',
        opacity: 0.75
    }
})