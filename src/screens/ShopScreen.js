import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tovarList from '../data/tovarList';
import Tovar from '../components/Tovar';
import OneTovar from '../components/OneTovar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ShopScreen = ({navigation}) => {
  const [tovar, setTovar] = useState(null);

  const tovarClick = prod => {
    setTovar(prod);
  };

  const closeOneTovar = () => {
    setTovar(null);
  };

  const renderTovar = () => {
    return tovarList.map(prod => (
      <Tovar tovarClick={tovarClick} prod={prod} key={prod.title} />
    ));
  };
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.push('Home')}>
        <FontAwesomeIcon color={'#B07908'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <View style={styles.shopWrp}>
        <View>
          <Text style={styles.title}>Najít tvou </Text>
          <Text style={styles.title2}>Oblíbené jídlo</Text>
        </View>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-basket'} size={30} color="#B07908" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.menu}>{renderTovar()}</View>
      </ScrollView>
      {tovar && (
        <OneTovar navigation={navigation} prod={tovar} close={closeOneTovar} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'black',
  },
  title: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#B07908',
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
  },
  title2: {
    color: '#B07908',
    fontSize: 30,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 30,
  },
  shopWrp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginTop: 35,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#B07908',
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  menu: {
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
    alignSelf: 'center',
    justifyContent:'center'
  },
});

export default ShopScreen;
