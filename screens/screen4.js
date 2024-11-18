import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Screen4 = () => {

    const navigation = useNavigation();

    return (
        <View style = {Styles.container}>
            <Text style={Styles.HomeText}>Screen4</Text>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Screen5",{screen: "Screen5"})}
            style={Styles.NextBottom} >
                <Text style={Styles.BottomText}>Screen5</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Screen6",{screen: "Screen6"})}
            style={Styles.NextBottom} >
                <Text style={Styles.BottomText}>Screen6</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen4;

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
