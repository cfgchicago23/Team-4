import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome(){
    return(
        <View>
            <Text style={styles.wel}>Thrive for Girls</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wel: {
        fontSize : 50,
        textAlign: 'center',
        margin: 40,
        fontWeight: 'bold',
        padding: 20,
        color: "#f093ee"
    }
})