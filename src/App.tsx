import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';
import FloatingButton from './components/floatingButton/floatingButton';
import AddTaskModal from './components/addTaskModal/addTaskModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList!</Text>
      <FloatingButton></FloatingButton>
      <AddTaskModal isVisible={modalVisible}></AddTaskModal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDarkColor,
    flex: 1,
  },
  title: {
    color: Colors.defaulTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25,
    marginTop: 20,
  },
});

export default App;
