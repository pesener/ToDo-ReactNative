import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './floatingButton.style';

const FloatingButton = () => {
  return (
    <TouchableWithoutFeedback>
      {' '}
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
