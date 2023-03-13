import React,{ StyleSheet,TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Button({title, onPress}){
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style= {styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>    
    );
}


Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: "#d9595d"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 15,
        textAlign: "center"
    }
});