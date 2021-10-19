import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../styles';

type Props = {
  color?: string;
};

export const LoadingIcon = (props: Props) => {
  const {color} = props;

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={color ? color : Colors.LightGrey} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
