import React, {FC} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './floatingButton.style';
interface IButtonProps {
  onPress: () => void;
}
const FloatingButton: FC<IButtonProps> = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
