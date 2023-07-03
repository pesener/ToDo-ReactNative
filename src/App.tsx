import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';
import FloatingButton from './components/floatingButton/floatingButton';
import AddTaskModal from './components/addTaskModal/addTaskModal';
import TaskCard from './components/TaskCard/TaskCard';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);
  function handleModalVisible() {
    if (modalVisible === false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }

    console.log('lolo');
  }

  function addTask(taskContent: string) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (taskContentCheck === '') {
      Alert.alert('Opps...', 'Please enter a valid task.');
    } else {
      if (checkDublicate) {
        Alert.alert('Opps...', 'You have already added this task. ');
      } else {
        const newTask = {
          id: toDoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setToDoList((oldTasks: any) => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }
  function deleteTask(task: any) {
    if (task.isCompleted === false) {
      const newList = toDoList.map((todo: any) => {
        if (todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter((item: any) => item.id !== task.id));
    }
  }
  const renderToDoList = ({item}: any) => (
    <TaskCard
      onDelete={() => deleteTask(item)}
      item={item}
      isCompleted={item.isCompleted}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList!</Text>
      <FloatingButton onPressko={handleModalVisible} />
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
