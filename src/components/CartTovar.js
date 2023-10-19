import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Counter from './Counter';
import products from '../mobx/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CartTovar = ({prod}) => {
  return (
    <View style={styles.cart}>
      <Image style={styles.image} source={prod.image} />
      <View>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}p</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon color={'white'} size={20} icon={'trash'} />
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 10,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#252525',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 15,
  },
  cartWrp: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    paddingBottom: 15,
    paddingTop: 10,
    width: 130,
  },
  price: {
    color: '#B07908',
    fontSize: 17,
    fontWeight: '700',
  },
  icon: {
    alignSelf: 'flex-end',
    paddingBottom: 25,
  },
});
export default CartTovar;
