import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import CartTovar from '../components/CartTovar';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';
import PustCart from '../components/PustCart';
import CartCongrats from '../components/CartCongrats';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CartScreen = ({navigation}) => {
  const [congrats, setCongrats] = useState(false);
  const cartProduct = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <CartTovar key={prod.title} prod={prod} />;
      });
  };
  const all = () => {
    const addArr = products.list.filter(el => el.added);
    let all = 0;
    addArr.forEach(product => {
      all = product.count * product.price + all;
    });
    return all;
  };

  return (
    <>
      <View style={styles.cont}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon color={'#B07908'} size={30} icon={'angle-left'} />
        </TouchableOpacity>
        {products.list.some(el => el.added) ? (
          <>
            <Text style={styles.cartTitle}>Vozík</Text>
            <ScrollView>{cartProduct()}</ScrollView>
            <View style={styles.totalPrice}>
              <View style={styles.totalSum}>
                <Text style={styles.totalSumText}>Celkový</Text>
                <Text style={styles.totalSumText}>{all()}Kc</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.push('Bron', {cart:true})}
                style={styles.cartButten}>
                <Text style={styles.cartBtnText}>Zadejte mou objednávku</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <PustCart navigation={navigation} />
        )}
      </View>
      {congrats && <CartCongrats navigation={navigation} />}
    </>
  );
};
const styles = StyleSheet.create({
  cont: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  icon: {
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#B07908',
    width: 35,
    height: 35,
    borderRadius: 10,
  },

  cartTitle: {
    color: '#B07908',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 'auto',
  },
  totalPrice: {
    backgroundColor: '#B07908',
    marginTop: 'auto',
    marginBottom: 30,
    height: 100,
    borderRadius: 15,
  },
  totalSum: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  totalSumText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  cartButten: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  cartBtnText: {
    color: '#B07908',
    textAlign: 'center',
    paddingTop: 7,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default observer(CartScreen);
