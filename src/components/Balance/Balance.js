import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({balance, outgoing}) {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.balance}>{balance}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.expenses}>{outgoing}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingStart: 18,
      paddingEnd: 18,
      marginTop: -24,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 4,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#9EA9AA'
    },
    currencySymbol: {
        color: '#9EA9AA',
        marginRight: 22
    },
    balance: {
        fontSize: 22,
        color: '#10BA3A'
    },
    expenses: {
        fontSize: 22,
        color: '#CF0F0F'
    }
  });
