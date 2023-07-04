import type {FC} from 'react';
import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {RootState} from '@redux/stores/store';
import {useSelector} from 'react-redux';

const HomeScreen: FC = () => {
  const text = useSelector((state: RootState) => state.text);

  return (
    <View style={styles.sectionContainer}>
      <Text testID="textID" style={[styles.text]}>
        {text}
      </Text>
    </View>
  );
};

export default HomeScreen;
