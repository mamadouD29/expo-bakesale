import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DealLists from "./components/dealLists";

export default function App() {
    let [fontsLoaded] = useFonts({
        "kanit-bold": require("./assets/font/Kanit-Bold.ttf"),
        "kanit-regular": require("./assets/font/Kanit-Regular.ttf"),
        "kanit-medium": require("./assets/font/Kanit-Medium.ttf"),
    });

    if(!fontsLoaded){
        return null;
    }

    return (
        <View style={styles.container}>
 
            <DealLists />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1e3e6",
        alignItems: "center",
        justifyContent: "center",
    },
});
