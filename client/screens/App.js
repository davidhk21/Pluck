import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import HomePage from './HomePage';
import TaskList from './TaskList';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Navigator headerMode="none">
        <Screen
          name="HomePage"
          component={HomePage}
        />
        <Screen
          name="TaskList"
          component={TaskList}
        />
      </Navigator>

    </NavigationContainer>
  );
};

export default App;
