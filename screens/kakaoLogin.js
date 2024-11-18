import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REST_API_KEY = "64a7b21a51c8cc6d0271947df9eaf4d8"
const REDIRECT_URI = "http://192.168.219.102:8081/Home"
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = () => {

    const navigation = useNavigation();

    function KaKaoLoginWebView(data) {
        const exp = "code=";
        var condition = data.indexOf(exp);
        if (condition != -1) {
            var authorize_code = data.substring(condition + exp.length);
            console.log("authorize_code: " + authorize_code);
            requestToken(authorize_code);
        };
    }
    
    const requestToken = async (authorize_code) => {

        var AccessToken = "none";
    
        axios({
            method: "post",
            url: "https://kauth.kakao.com/oauth/token",
            params: {
                grant_type: "authorization_code",
                client_id: REST_API_KEY,
                redirect_uri: REDIRECT_URI,
                code: authorize_code,
            },
        }).then((response) => {
            AccessToken = response.data.access_token;
            // console.log("AccessToken", AccessToken);
            // requestUserInfo(AccessToken);
            storeData(AccessToken);
        }).catch(function (error) {
            console.log("error", error);
        })
        navigation.navigate("Signup",{screen: "Signup"});
    };

    // 정보조회
    // function requestUserInfo(AccessToken) {
    //     axios({
    //         method: "GET",
    //         url: "https://kapi.kakao.com/v2/user/me",
    //         headers: {
    //             Authorization: `Bearer ${AccessToken}`
    //         },
    //     }).then((response) => {
    //         var user_nickName = response.data.kakao_account.profile.nickname;
    //         var user_profile = response.data.kakao_account.profile;
    //         console.log("user_nickName",user_nickName);
    //         console.log("user_profile",user_profile);
    //         console.log("response.data.kakao_account",response.data.kakao_account);
    //     }).catch(function (error) {
    //         console.log("error", error);
    //     })
    //     return;
    // }

    const storeData = async (requestToken) => {
        try {
            await AsyncStorage.setItem("userAccessToken", requestToken);
        } catch (error) {

        } 
    }

    return (
        <View style={Styles.container}>
            <WebView 
            style={{flex: 1}}
            originWhitelist={["*"]}
            scalesPageToFit={false}
            source={{
                uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
            }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            javaScriptEnabled
            onMessage={event => {KaKaoLoginWebView(event.nativeEvent["url"]);}}
            />
        </View>
    )
}

export default KaKaoLogin;

const Styles = StyleSheet.create({
    container: { 
        flex: 1,
        marginTop: 24,
        backgroundColor: "#fff",
    },
});
