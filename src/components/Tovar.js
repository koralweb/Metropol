import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

const Tovar = ({prod, tovarClick}) => {
  return (
    <TouchableOpacity key={prod.title} onPress={() => tovarClick(prod)}>
      <View style={styles.cart}>
        <Image style={styles.image} source={prod.image} />
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  cart: {
    width: 130,
    height: 190,
    margin: 15,
    backgroundColor: '#252525',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  price: {
    color: 'silver',
    fontSize: 15,

    paddingBottom: 10,
    textAlign: 'center',
  },
});
export default observer(Tovar);
