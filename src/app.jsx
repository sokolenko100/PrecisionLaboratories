import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, TextInput} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from './navigation/rootNavigator';
import AppStoreProvider from '@redux/stores/provider';

export default App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppStoreProvider>
          <RootNavigator />
        </AppStoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
