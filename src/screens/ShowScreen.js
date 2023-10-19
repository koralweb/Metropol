import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import translation from '../data/translation';

const ShowScreen = ({navigation}) => {
  const renderBroardcasts = () => {
    return translation
      .filter(el => el.date >= new Date().getDate())
      .map(list => (
        <View key={list.title} style={styles.cartBroadcasts}>
          <View style={styles.cart}>
            <Text style={styles.date}>{list.date}.10.2023</Text>
            <Text style={styles.command}>{list.team1}</Text>
            <Text style={styles.command}>{list.team2}</Text>
          </View>

          <Text style={styles.liga}>{list.liga} - </Text>
        </View>
      ));
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'#B07908'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>Sportovní přenosy </Text>

      <ScrollView style={styles.wrp}>{renderBroardcasts()}</ScrollView>
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
    marginBottom: 10,
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
    marginTop: 'auto',
    marginBottom: 10,
  },
  cartBroadcasts: {
    backgroundColor: '#252525',
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrp: {
    alignSelf: 'center',
    width: '80%',
  },
  date: {
    color: 'silver',
    fontSize: 15,
    paddingBottom: 5,
  },
  command: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  liga: {
    width: '35%',
    color: '#B07908',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
  },
});

export default ShowScreen;
