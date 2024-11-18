import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Screen3 = () => {
    return (
        <View style = {Styles.container}>
            <Text style={Styles.HomeText}>Screen3</Text>
        </View>
    )
}

export default Screen3;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    HomeText: {
        fontSize: 35,
        textAlign: "center",
    },
})