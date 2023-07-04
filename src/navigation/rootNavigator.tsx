import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import {navigationRef} from '@helpers/rootNavigation';
import Login from '@screens/Login';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Login.name}>
        <Stack.Screen
          name={Login.name}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={HomeScreen.name}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
