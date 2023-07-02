import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './addTaskModal.style';
import Modal from 'react-native-modal';
interface IModalProps {
  isVisible: boolean;
}
const AddTaskModal: FC<IModalProps> = ({isVisible}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modalContainer}>
      {' '}
      <View>
        <Text></Text>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
