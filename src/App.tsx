import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';
import FloatingButton from './components/floatingButton/floatingButton';
import AddTaskModal from './components/addTaskModal/addTaskModal';
import TaskCard from './components/TaskCard/TaskCard';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }
  function addTask(taskContent: string) {
    const newTask = {
      id: toDoList.length + 1,
      task: taskContent,
      isCompleted: false,
    };
    setToDoList((oldTasks: any) => [...oldTasks, newTask]);
  }
  const renderToDoList = ({item}: any) => (
    <TaskCard item={item} isCompleted={item.isCompleted} />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList!</Text>
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
      />
      <FlatList data={toDoList} renderItem={renderToDoList} />
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
