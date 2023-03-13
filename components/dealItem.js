
import React,{ StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { globalStyles } from "../styles/global";
import { priceDisplay } from "../shared/util";



export default function DealItem ({deal}){
    
    
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={{uri: deal.media[0]}} style = {styles.image}/>
            <View style={styles.cardTitle}>

                <Text style={globalStyles.titleText}>{deal.title}</Text>

                <View style={styles.textContainer}>
                    <Text style={globalStyles.paragraph}>{priceDisplay(deal.price)}</Text>
                    
                    <Text style={globalStyles.paragraph}>{deal.cause.name}</Text>
                </View>
            </View>
        </TouchableOpacity>    
    );
}



DealItem.propTypes = {
    deal: PropTypes.object.isRequired 
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 150,
    },
    card: {
        elevation: 5,
        marginBottom: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#cacccf",
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 10,
        shadowOpacity: .5,


    },
    cardTitle: {
        padding: 10,

    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",

    }


});