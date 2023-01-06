import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { correctFontSize } from '../utils/correctFontSize';

function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: correctFontSize(12),
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: correctFontSize(14),
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
