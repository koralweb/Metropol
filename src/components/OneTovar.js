import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import products from '../mobx/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const OneTovar = ({prod, close, navigation}) => {
  const [press, setPress] = useState(prod.added);

  const addProduct = () => {
    setPress(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.push('Shop')}>
        <FontAwesomeIcon icon={'angle-left'} size={30} color="#B07908" />
      </TouchableOpacity>
      <Image style={styles.image} source={prod.image} />
      {press ? (
        <TouchableOpacity
          style={styles.tovarButten}
          onPress={() => navigation.push('Cart')}>
          <Text style={styles.tovarBtn}>Přidal!</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.tovarCart}>
          <Text style={styles.tovarTitle}>{prod.title}</Text>
          <View style={styles.desc}>
            <Text style={styles.tovarDesc}>{prod.desc}</Text>
            <Text style={styles.tovarPrice}>{prod.price}Kc</Text>
          </View>

          <TouchableOpacity style={styles.tovarButten} onPress={addProduct}>
            <Text style={styles.tovarBtn}>Přidat do košíku</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  icon: {
    marginTop: 35,
    marginBottom: 'auto',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#B07908',
    width: 35,
    height: 35,
    borderRadius: 10,
    marginBottom: 10,
  },
  tovarButten: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#B07908',
    borderRadius: 15,
    marginBottom: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  tovarBtn: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 17,
    fontWeight: '700',
  },
  tovarTitle: {
    color: '#B07908',
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 10,
  },

  tovarPrice: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  tovarDesc: {
    color: 'white',
    width: '60%',
    fontSize: 20,
    fontWeight: '500',
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});
export default OneTovar;
