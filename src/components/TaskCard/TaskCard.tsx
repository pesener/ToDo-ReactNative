import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './TaskCard.style';
interface ICardProps {
  isCompleted: boolean;
  item: any;
}
const TaskCard: FC<ICardProps> = ({isCompleted, item}) => {
  return isCompleted ? (
    <View style={styles.completedContainer}>
      <Text style={styles.completedText}>{item.task}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.taskText}>{item.task}</Text>
    </View>
  );
};

export default TaskCard;
