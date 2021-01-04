import React from 'react';
import { Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Task from '../components/task_list/Task';

import { Texts, Buttons, Screen } from '../styles/taskListStyles';

const TaskList = ({ route, navigation }) => {
  const { tasks, getIncompletedTasks, getCompletedTasks } = route.params;

  return (
    <View style={Screen.container}>
      <SafeAreaView>
        <Text style={Texts.header}>Tasks to Pluck!</Text>
        <Text style={Texts.categories}>This Month</Text>
        <View>
          {tasks.filter(task => task.category === 'This Month').map((task, idx) => <Task key={idx} task={task} getIncompletedTasks={getIncompletedTasks} getCompletedTasks={getCompletedTasks} />)}
        </View>
        <Text style={Texts.categories}>This Week</Text>
        <View>
          {tasks.filter(task => task.category === 'This Week').map((task, idx) => <Task key={idx} task={task} getIncompletedTasks={getIncompletedTasks} getCompletedTasks={getCompletedTasks} />)}
        </View>
        <Text style={Texts.categories}>Today</Text>
        <View>
          {tasks.filter(task => task.category === 'Today').map((task, idx) => <Task key={idx} task={task} getIncompletedTasks={getIncompletedTasks} getCompletedTasks={getCompletedTasks} />)}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage')}
          style={Buttons.back}
        >
          <Text style={Buttons.backText}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask', { getIncompletedTasks })}
        style={Buttons.addTask}
      >
        <Text style={Buttons.addTaskText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

TaskList.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TaskList;
