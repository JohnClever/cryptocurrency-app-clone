import React from 'react'
import { Text, View, StyleSheet } from "react-native"

const Transaction = () => {
    return(
        <View style={styles.container}>
            <Text>Transaction</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4.65,
        shadowOpacity: 0.30,
        elevation: 8
    }
})

export default Transaction