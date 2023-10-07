import {StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function Logo() {
    return (
        <View style={styles.img}>
            <Image
                source={require('../assets/logoOrange.webp')}
                style = {{ width: 350, height:105 }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        paddingTop: 80,
        paddingBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})