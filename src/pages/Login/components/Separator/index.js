import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Style from '../../../../style';

const Separator = ({ text }) => {
  return (
    <View style={styles.containerLine}>
      <LinearGradient
        colors={[Style.Colors.primarySilver + '33', Style.Colors.primaryGrey]} // 33 é 20% de opacidade em hexadecimal
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.lineGradient}
      >
        <View style={styles.line} />
      </LinearGradient>
      <Text style={styles.textLine}>{text}</Text>
      <LinearGradient
        colors={[Style.Colors.primaryGrey, Style.Colors.primarySilver + '33']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.lineGradient}
      >
        <View style={styles.line} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  lineGradient: {
    flex: 1,
    height: 1,
  },
  line: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  textLine: {
    ...Style.Typography.description,
    color: Style.Colors.primaryGrey,
    marginHorizontal: 10,
  },
});

export default Separator;
