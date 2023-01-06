import { Platform } from 'react-native';
import { correctFontSize } from '../utils/correctFontSize';

import colors from './colors';

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: correctFontSize(14),
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
