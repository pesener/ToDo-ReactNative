import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.defaultGrayColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 2.5,
    padding: 10,
  },
  title: {
    color: Colors.defaulTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    textAlign: 'center',
    fontSize: 25,
  },
  input: {
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 30,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: Colors.defaultBlueColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height: 50,
    padding: 10,
  },
  buttonTitle: {
    fontSize: 22,
    color: Colors.defaultDarkColor,
    fontFamily: Fonts.defaultRegularFontFamily,
  },
});
