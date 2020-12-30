import React from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import PropTypes from 'prop-types';

import Task from '../components/task_list/Task';

const TaskList = ({ route, navigation }) => {
  const { tasks, getIncompletedTasks } = route.params;

  return (
    <SafeAreaView>
      <Text>Tasks to Pluck!</Text>
      <Text>This Month</Text>
      <View>
        {tasks.filter(task => task.category === 'This Month').map(task => <Task task={task} />)}
      </View>
      <Text>This Week</Text>
      <View>
        {tasks.filter(task => task.category === 'This Week').map(task => <Task task={task} />)}
      </View>
      <Text>Today</Text>
      <View>
        {tasks.filter(task => task.category === 'Today').map(task => <Task task={task} />)}
      </View>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask', { tasks, getIncompletedTasks })}
      />
    </SafeAreaView>
  );
};

TaskList.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TaskList;
