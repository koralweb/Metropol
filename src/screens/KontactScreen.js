import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const KontactScreen = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'#B07908'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>Kontakty</Text>
      <View style={styles.contactList}>
        <View style={styles.contactCart}>
          <Text style={styles.contactText}>Adresa</Text>
        </View>
        <View style={styles.contactCart}>
          <Text style={styles.contactText}>Telefonní číslo</Text>
        </View>
        <View style={styles.contactCart}>
          <Text style={styles.contactText}>Index</Text>
        </View>
        <View style={styles.contactCart}>
          <Text style={styles.contactText}>Data</Text>
        </View>
      </View>
      <Image style={styles.img} source={require('../images/logo.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
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
  title: {
    color: '#B07908',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 30,
    marginTop: 20,
  },
  contactList: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  contactCart: {
    backgroundColor: '#252525',
    padding: 20,
    marginBottom: 25,
    borderRadius: 20,
  },
  contactText: {
    color: 'white',
  },
  img: {
    alignSelf: 'center',
    marginTop: 40,
    width: 847 / 3,
    height: 120 / 3,
    marginTop: 'auto',
    marginBottom: 30,
  },
});

export default KontactScreen;
