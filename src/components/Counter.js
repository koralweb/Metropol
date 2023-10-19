import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.minWrp} onPress={dec}>
        <Text style={styles.min}>-</Text>
      </TouchableOpacity>
      <Text style={styles.number}>{cnt}</Text>
      <TouchableOpacity style={styles.plusWrp} onPress={inc}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
  },
  minWrp: {
    backgroundColor: '#252525',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#B07908',
  },
  min: {
    color: '#B07908',
    fontSize: 15,
  },
  plusWrp: {
    backgroundColor: '#B07908',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  plus: {
    color: 'white',
    fontSize: 15,
  },
  number: {
    color: 'white',
    fontSize: 15,
    paddingTop: 5,
  },
});

export default Counter;
