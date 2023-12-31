import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  taskText: {
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 20,
  },
});
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultBlueColor,
    ...baseStyle.container,
  },
  taskText: {
    color: Colors.defaultDarkColor,
    ...baseStyle.taskText,
  },
  completedContainer: {
    ...baseStyle.container,
    backgroundColor: Colors.defaultGrayColor,
  },
  completedText: {
    ...baseStyle.taskText,
    color: 'white',
    textDecorationLine: 'line-through',
  },
});
