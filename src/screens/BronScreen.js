import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import BronCongrats from '../components/BronCongrats';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BronScreen = ({route, navigation}) => {
  const [bron, setBron] = useState(false);
  const fromCart = useState(route.params?.cart)[0]
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'#B07908'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>{fromCart ? 'Dokončete objednávku' : 'Stůl rezervace'}</Text>

      <View style={styles.bronList}>
        <TextInput
          style={styles.bronText}
          placeholder="Jméno"
          placeholderTextColor={'silver'}></TextInput>
        <TextInput
          style={styles.bronText}
          placeholder="Příjmení"
          placeholderTextColor={'silver'}></TextInput>
        <TextInput
          style={styles.bronText}
          placeholder="Číslo mobilního telefonu"
          placeholderTextColor={'silver'}></TextInput>
        <TextInput
          style={styles.bronText}
          placeholder="Číslo"
          placeholderTextColor={'silver'}></TextInput>
      </View>
      <TouchableOpacity style={styles.bronBtn} onPress={() => setBron(true)}>
        <Text style={styles.btnText}>{fromCart ? 'Překontrolovat' : 'Další'}</Text>
      </TouchableOpacity>
      {bron && <BronCongrats navigation={navigation} fromCart={fromCart}/>}
    </View>
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
    marginBottom: 30,
    marginTop: 20,
  },
  bronList: {
    marginBottom: 'auto',
    alignSelf: 'center',
    width: '80%',
  },
  bronText: {
    backgroundColor: '#252525',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  bronBtn: {
    backgroundColor: '#B07908',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 'auto',
    marginBottom: 30,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
  },
});

export default BronScreen;
