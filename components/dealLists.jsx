import React, { useEffect, useState } from "react";
import {StyleSheet, FlatList, Text, View } from "react-native";
import FetchDeals from "../services/fetchData";
import { globalStyles } from "../styles/global";
import DealItem from "./dealItem";



export default function DealLists (){
    const [deals, setDeals]= useState([]);
    
    // fetch api
    useEffect(()=>{
        FetchDeals()
            .then((deals) => {
            // console.log(deals);
                setDeals(deals);
            });
    },[]);

    return (
        <View style={globalStyles.container}>
            
            <FlatList 
                data={deals} 
                renderItem={({item}) => <DealItem deal={item} /> } 

            />
        </View>
    );
}
