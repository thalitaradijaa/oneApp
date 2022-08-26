import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Movement from "../Movement/Movement";

export default function ListLastMoves({ list }) {
  return (
    <View>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list} 
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movement data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
    color: "#0C272E",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
