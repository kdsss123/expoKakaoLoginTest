import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Screen6 = () => {

    const navigation = useNavigation();

    return (
        <View style = {Styles.container}>
            <Text style={Styles.HomeText}>Screen6</Text>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Screen4",{screen: "Screen4"})}
            style={Styles.NextBottom} >
                <Text style={Styles.BottomText}>Screen4</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Screen5",{screen: "Screen5"})}
            style={Styles.NextBottom} >
                <Text style={Styles.BottomText}>Screen5</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen6;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    HomeText: {
        fontSize: 35,
        textAlign: "center",
    },
    NextBottom: {
        backgroundColor: "purple",
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    BottomText: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
    },
})