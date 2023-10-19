import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Bars = ({navigation, setMenu}) => {
  const [screenName, setScreenName] = useState(useRoute().name === 'Home');

  return (
    <View style={styles.cont}>
      {!screenName && (
        <TouchableOpacity style={styles.icon} onPress={() => setMenu(false)}>
          <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
        </TouchableOpacity>
      )}
      <Image style={styles.img} source={require('../images/logo.png')} />
      <View style={styles.barsList}>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text style={styles.barsText}>Domov</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Shop')}>
          <Text style={styles.barsText}>Prodejna</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Bron')}>
          <Text style={styles.barsText}>Rezervace</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Show')}>
          <Text style={styles.barsText}>Broadcasts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Kontact')}>
          <Text style={styles.barsText}>Vysílání</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <Text style={styles.barsText}>Vozík</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    paddingTop: 40,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  icon: {
    marginTop: 40,
    left: 20,
  },
  barsList: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  barsText: {
    fontSize: 20,
    color: 'white',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#252525',
    textAlign: 'center',
    borderRadius: 15,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    width: 847 / 3,
    height: 120 / 3,
  },
});

export default Bars;
