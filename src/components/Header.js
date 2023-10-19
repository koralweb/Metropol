import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Bars from './Bars';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const [menu, setMenu] = useState(useRoute().name === 'Home');

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => setMenu(true)}>
        <FontAwesomeIcon
          color={'black'}
          size={30}
          icon={'bars'}></FontAwesomeIcon>
      </TouchableOpacity>
      {menu && <Bars navigation={navigation} />}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    paddingTop: 40,
    paddingLeft: 10,
    zIndex: 2,
  },
});

export default Header;
