import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import HomePage from './screens/HomePage';
import TaskList from './screens/TaskList';
import AddTask from './screens/AddTask';

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
        <Screen
          name="AddTask"
          component={AddTask}
        />
      </Navigator>

    </NavigationContainer>
  );
};

export default App;
