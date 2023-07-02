import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.defaultBlueColor,
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    bottom: 25,
  },
  icon: {
    fontSize: 35,
    color: Colors.defaultDarkColor,
  },
});
