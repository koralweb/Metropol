import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PustCart = () => {
  return (
    <>
      <View style={styles.cont}>
        <Text style={styles.cartText}>Košík je prázdný</Text>
      </View>
      <Image style={styles.img} source={require('../images/logo.png')} />
    </>
  );
};
const styles = StyleSheet.create({
  cont: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
    height: 300,
  },
  img: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 847 / 3,
    height: 120 / 3,
  },
  cartText: {
    color: 'silver',
    fontSize: 25,
    fontWeight: '600',
  },
});

export default PustCart;
