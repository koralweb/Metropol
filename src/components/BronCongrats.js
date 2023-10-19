import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import products from '../mobx/products';

const BronCongrats = ({navigation, fromCart}) => {

  useEffect(() => {
    products.clearAllProducts()
  }, [])

  return (
    <View style={styles.cont}>
      <Image style={styles.image} source={require('../images/congrats.png')} />
      <Text style={styles.titCongrats}>Gratuluji!</Text>
      <Text style={styles.titleText}>{fromCart ? 'Objednávka Kompletní' : 'Stůl rezervován'}</Text>
      <TouchableOpacity
        style={styles.butten}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btn}>Zadní</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 537 / 3,
    height: 506 / 3,
    marginTop: 'auto',
  },
  titCongrats: {
    color: '#B07908',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  butten: {
    backgroundColor: '#B07908',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  btn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
  },
});

export default BronCongrats;
