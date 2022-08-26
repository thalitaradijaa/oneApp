import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import ListLastMoves from '../../components/ListLastMoves/ListLastMoves';

const list = [
    {
        id: 1,
        label: 'Boleto Conta Luz',
        value: '159,00',
        date: '16/02/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix do cliente X',
        value: '1298,00',
        date: '22/02/2022',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '3500,00',
        date: '28/02/2022',
        type: 1 // receita
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Thalita Radija"/>
        <Balance balance="1600,00" outgoing="-500,00"/>
        <ListLastMoves list={list}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
