import React, {FC, useState} from 'react';
import {Text, View, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './addTaskModal.style';
import Modal from 'react-native-modal';
interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (taskContent: string) => void;
}
const AddTaskModal: FC<IModalProps> = ({isVisible, onClose, onAddTask}) => {
  const [taskInputValue, setTaskInputValue] = useState<string>();
  function handleAddTask() {
    if (taskInputValue) {
      onAddTask(taskInputValue);
    }
    setTaskInputValue('');
  }
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      onBackdropPress={onClose}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> Add Task To Your List</Text>
        <TextInput
          style={styles.input}
          placeholder=" Task..."
          placeholderTextColor="white"
          multiline={true}
          onChangeText={(t: string) => setTaskInputValue(t)}
          value={taskInputValue}
        />
        <TouchableWithoutFeedback onPress={handleAddTask}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>Add the Text</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
