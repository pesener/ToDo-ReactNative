import React, {FC} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './floatingButton.style';
interface IButtonProps {
  onPressko: () => void;
}
const FloatingButton: FC<IButtonProps> = ({onPressko}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressko}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
